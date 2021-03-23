import RowLinkButton from "./RowLinkButton";

function OriginRow(props) {
  return (
    <div className="row">
      <label>Origin</label>
      <RowLinkButton>{props.countryName}</RowLinkButton>
    </div>
  );
}

export default OriginRow;
