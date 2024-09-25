// react
import { useState , useContext } from "react"
// context
import ThemeContext from "../context/ThemeContext"
import { mockSearchResults } from "../constants/mock"
import SearchResult from "./SearchResult"
// icon


const Search = () => {


    const { darkMode } = useContext(ThemeContext);


    const [input , setInput] = useState()
    const [bestMetches , setBestMetches] = useState(mockSearchResults.result)

    const clear = () => {
        setInput("")
        setBestMetches([])
    }

    const updateBestMatches = () => {
        setBestMetches(mockSearchResults.result)
    }

    return (
        <div       
            className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
                darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
            }`} 
        >
            <input 
                type="text" 
                value={input} 
                className={`w-full px-4 py-2 focus:outline-none rounded-md ${
                    darkMode ? "bg-gray-900" : null
                  }`}
                placeholder="Search stock..."
                onChange={(event) => {
                    setInput(event.target.value)
                }}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        updateBestMatches()
                    }
                }}
            />
            {input && (
                <button onClick={clear} className="m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )} 

            <button onClick={updateBestMatches} className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 fill-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

            {input && bestMetches.length > 0 ? (<SearchResult results={bestMetches} />) : null}
        </div>
    )
}

export default Search
