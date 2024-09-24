const SearchResult = () => {
  return (
    <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-100">
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ${
              darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-200 "
            } transition duration-300`}
            onClick={() => setStockSymbol(item.symbol)}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  )
}

export default SearchResult
