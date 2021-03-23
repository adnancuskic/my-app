function SubgenreVoteProcentage(props) {
  return (
    <div className="row">
      <h5> {props.name}</h5>
      <div className="graph-line">
        <span className="line" style={{ width: `${parseInt(props.percent)}%` }}>
          ${parseInt(props.percent)}%
        </span>
      </div>
    </div>
  );
}

export default SubgenreVoteProcentage;
