import {ResponsiveLine} from '@nivo/line';

const data = [
        {
            "id": "Depot Value",
            "data": [
                {"x": "January", "y": 0},
                {"x": "February", "y": 100},
                {"x": "March", "y": 200},
                {"x": "April", "y": 300},
                {"x": "May", "y": 400},
                {"x": "June", "y": 500},
                {"x": "July", "y": 600},
                {"x": "August", "y": 700},
                {"x": "September", "y": 800},
                {"x": "October", "y": 900},
                {"x": "November", "y": 1000},
                {"x": "December", "y": 1100}
            ]
        }
    ]

export const LineChart = () => {
    return (
        <ResponsiveLine
            data={data}
            colors={['black']}
            lineWidth={0.5}
            margin={{ top: 25, right: 40, bottom: 50, left: 40 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="linear"
            axisTop={null}
            axisRight={null}
            axisBottom={
                {
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendOffset: 36,
                }
            }
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            enablePointLabel={true}
            pointSize={2}
            // pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor="grey"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[]}
        />
    );
}