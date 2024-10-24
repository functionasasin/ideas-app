import React from 'react'
import InfoPopover from './InfoPopover'

const Header = () => {
    return (
        <div className="flex items-center justify-between p-2 bg-white w-full h-14">
            <h1 className="text-purple-700 text-lg font-bold pl-4 pr-4">IdeaShare</h1>
            <div className="pr-4">
                <InfoPopover />
            </div>
        </div>
    );
};

export default Header;