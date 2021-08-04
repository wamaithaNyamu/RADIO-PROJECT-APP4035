//create song


const Song = (props) => {

  // initialize the Constants

  const {  name,  singers, genre,  url } = props

  return (
    <div className="song-info">
      <div className="song-name">{name}

       
        
      </div>
      <div className="listen-song">
        <audio controls src={url} />
      </div>
     
    </div>
  );
}

export default Song;