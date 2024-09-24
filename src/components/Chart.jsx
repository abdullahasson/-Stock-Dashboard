import { useState } from "react"
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
import Card from "./Card"

const Chart = () => {
    const darkMode = false
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
