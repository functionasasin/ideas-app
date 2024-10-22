import React from 'react'
import SearchBar from './SearchBar'
import InfoPopover from './InfoPopover'

const NavBar = () => {
    return (
        <div className="flex items-center justify-between p-2 bg-white w-full h-14">
            <h1 className="text-purple-700 text-lg font-bold pl-4 pr-4">IdeaShare</h1>
            <div className="flex-grow max-w-2xl mx-auto">
                <SearchBar />
            </div>
            <div className='pr-4'>
                <InfoPopover />
            </div>
        </div>
    );
};

export default NavBar;