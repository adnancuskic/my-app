import { ResponsiveBar } from "@nivo/bar";
import ChartPop from "./ChartPop";

function PopularCol(props) {
  return (
    <div className="stats-sheet">
      <label>Most popular in</label>
      <ChartPop popularity={props.popularity} />
    </div>
  );
}

export default PopularCol;
