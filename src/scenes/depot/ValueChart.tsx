import {ResponsiveLine} from '@nivo/line';
import {fetchAllDataFromTransactions} from "../../data/fetchTransactionObject";
import {useItems} from "../../contexts/ItemContext";
import {useEffect} from "react";

type Props = {
    className?: string
}

const dataArray = [
    {

    }
]

export const ValueChart = ({className}: Props) => {
    const {items, setItems} = useItems()

    items?.reverse()

    useEffect(() => {
        fetchAllDataFromTransactions(setItems)
    })

    const data = [
        {
            "id": "Depot Value",
            "color": "hsl(266, 70%, 60%)",
            "data": [
                {"x": "January", "y": items[11]?.amount ?? 0},
                {"x": "February", "y": items[10]?.amount ?? 0},
                {"x": "March", "y": items[9]?.amount ?? 0},
                {"x": "April", "y": items[8]?.amount ?? 0},
                {"x": "May", "y": items[7]?.amount ?? 0},
                {"x": "June", "y": items[6]?.amount ?? 0},
                {"x": "July", "y": items[5]?.amount ?? 0},
                {"x": "August", "y": items[4]?.amount ?? 0},
                {"x": "September", "y": items[3]?.amount ?? 0},
                {"x": "October", "y": items[2]?.amount ?? 0},
                {"x": "November", "y": items[1]?.amount ?? 0},
                {"x": "December", "y": items[0]?.amount ?? 0}
            ]
        }
    ]

    return (
        <div className={className}>
            <ResponsiveLine
                data={data}
                colors={['black']}
                lineWidth={0.5}
                margin={{ top: 20, right: 25, bottom: 40, left: 25 }}
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
                pointBorderWidth={2}
                pointBorderColor="grey"
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[]}
            />
        </div>
    );
}