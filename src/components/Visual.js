function Visual(props) {
  return (
    <div className="col visual">
      <figure
        style={{
          backgroundImage: `url(${props.profilePic})`,
        }}
      >
        <figcaption>
          <button className="btn btn-claim-music-id">Claim music_id</button>
        </figcaption>
      </figure>
    </div>
  );
}

export default Visual;
