// react
import { useState , useContext } from "react"
// context
import ThemeContext from "../context/ThemeContext";
import {
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    AreaChart,
    Tooltip,
  } from "recharts";
import { mockHistoricalData } from "../constants/mock"
import { convertUnixTimestampToDate } from "../helpers/date-helper"
import {chartConfig} from "../constants/config"
import Card from "./Card"
import ChartFilter from "./ChartFilter";

const Chart = () => {

    const { darkMode } = useContext(ThemeContext)

    const [data , setData] = useState(mockHistoricalData)   
    const [filter , setFilter] = useState("1W")

    const formatData = () => {
        return data.c.map((item , index) => {
            return {
                value: item.toFixed(2),
                date: convertUnixTimestampToDate(data.t[index])
            }
        })
    }

    return (
        <Card>
            <ul className="flex absolute top-2 right-2 z-40">
                {Object.keys(chartConfig).map((item) => (
                <li key={item}>
                    <ChartFilter
                    text={item}
                    active={filter === item}
                    onClick={() => {
                        setFilter(item);
                    }}
                    />
                </li>
                ))}
            </ul>
            <ResponsiveContainer>
                <AreaChart data={formatData(data)}>
                    <defs>
                        <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                            stopOpacity={0}
                        />
                        </linearGradient>
                    </defs>
                    <Tooltip
                        contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
                        itemStyle={darkMode ? { color: "#818cf8" } : null}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#312e81" 
                        fillOpacity={1} 
                        strokeWidth={0.5}
                        fill="url(#chartColor)"
                    />

                    <Tooltip />
                    <XAxis dataKey={"data"} />
                    <YAxis domain={["dataMin" , "dataMax"]} />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default Chart
