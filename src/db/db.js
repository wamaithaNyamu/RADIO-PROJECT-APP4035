const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then((connection) =>
      console.log(
        `MongoDb Database server at: ${connection.connection.host}`.blue
      )
    )
    .catch((err) => console.log(err));
};
