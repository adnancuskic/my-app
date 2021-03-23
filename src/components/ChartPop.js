import { ResponsiveBar } from "@nivo/bar";

function ChartPop(props) {
  return (
    <div style={{ height: "250px" }}>
      <ResponsiveBar
        data={props.popularity}
        labelSkipWidth={16}
        labelSkipHeight={16}
        keys={["percentage"]}
        indexBy="city"
        colors={{ datum: "greys" }}
        margin={{ top: 15, right: 0, bottom: 0, left: 0 }}
        padding={0.85}
        layout="horizontal"
        indexScale={{ type: "band", round: true }}
        enableGridY={false}
        axisLeft={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          fill: "black",
        }}
        theme={{
          axis: {
            ticks: {
              text: {
                marginBottom: "160px",
                fill: "black",
                translateY: -15,
                translateX: 0,
                textAnchor: "start",
                fontSize: "1.1em",
                fontFamily: "suisseInt",
                fontWeight: 400,
                letterSpacing: 0.5,
              },
            },
          },
        }}
        axisBottom={null}
        labelSkipHeight={12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
}

export default ChartPop;
