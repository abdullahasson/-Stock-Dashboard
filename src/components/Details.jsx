// react
import { useContext } from "react"
// context
import ThemeContext from "../context/ThemeContext"
// components
import Card from "./Card"

const Details = ({ 
    details
}) => {

    const { darkMode } = useContext(ThemeContext)

    const detailsList = {
        name: 'Name',
        country: 'Country',
        currency: 'Currency',
        exchange: 'Exchange',
        ipo: 'IPO Date',
        marketCapitalization: 'MarketCapitalization',
        finnhubIndustry: 'Industry',
    }


    const convertMillionToBillion = (number) => {
        return (number / 1000).toFixed(2)
    }

    return (
        <Card>
            <ul className={`w-full h-full flex flex-col justify-between divide-y-1 ${
                darkMode ? "divide-gray-800" : null
            }`}>
                {Object.keys(detailsList).map(item => (
                    <li key={item} className="flex-1 flex justify-between items-center py-2">
                        <span>{detailsList[item]}</span>
                        <span>{item === "marketCapitalization" ? `${convertMillionToBillion(details[item])}B` : details[item]}</span>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default Details
