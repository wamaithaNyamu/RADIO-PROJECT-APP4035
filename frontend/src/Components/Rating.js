import { Select, Button, Row } from "antd";
import { useEffect, useState } from "react";
import { Rate } from "antd";
import { get, post, put } from "../utils/requests";
const { Option } = Select;

const RateSong = ({ id, ref, set }) => {
  const [rate, setRate] = useState(1);
  const [rated, setRated] = useState(false);
  // song id is supposed to come from the songs
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const handleChange = async (newRating) => {
    setRate(parseInt(newRating));

    setRated(true);

    const { data } = await put(`/update/rating/${id}`, { newRating });
    if (data.success === true) {
      console.log("success", data);
      ref(set);
    }
  };

  useEffect(() => {
    console.log("rated status change");
  }, [rated]);
  return (
    <Row>
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={rate} />
        {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ""}
      </span>
    </Row>
  );
};
export default RateSong;
