import RowLinkButton from "./RowLinkButton";
import SubgenreVoteProcentage from "./SubgenreVoteProcentage";

function SubGenres(props) {
  return (
    <div className="row">
      <label>Subgenres</label>
      {props.arrayOfGenres.map((element) => {
        return <RowLinkButton key={element.id}>{element.name}</RowLinkButton>;
      })}
      <div className="tooltip-wrapper">
        <button className="btn btn-add">Add subgenre</button>
        <div className="tooltip">
          <h3>Vote for subgenres</h3>
          <p>
            Don’t agree with the subgenres? Add the ones you think are missing
            or vote for existing to get yours on top!
          </p>
          <div className="stats-sheet">
            {props.arrayOfGenres.map((element) => {
              return (
                <SubgenreVoteProcentage
                  name={element.name}
                  percent={element.vote_percentage}
                  key={element.id}
                />
              );
            })}
          </div>
          <p>
            <button className="btn btn-shadow">Vote now</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubGenres;
