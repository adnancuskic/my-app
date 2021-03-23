import RowLinkButton from "./RowLinkButton";

function GenresRow(props) {
  return (
    <div className="row">
      <label>Genre</label>
      <RowLinkButton>{props.generalGenre}</RowLinkButton>
    </div>
  );
}

export default GenresRow;
