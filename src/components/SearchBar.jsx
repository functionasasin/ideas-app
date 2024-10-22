import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
    return (
        <div className="flex items-center w-full max-w-md bg-white rounded-full p-1 h-8 border border-gray-300 mx-auto">
            <input
                type="text"
                placeholder="Search"
                className="flex-grow p-3 text-gray-600 bg-transparent focus:outline-none h-full"
            />
            <SearchIcon className="text-gray-600 mr-2" />
        </div>
    )
}

export default SearchBar