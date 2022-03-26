import React from 'react';

import {SearchIcon} from "@heroicons/react/outline";

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className={"flex items-center  my-5 px-5  py-2 bg-[#F6F6F6] " +
            "rounded "}>
            {/***Search Icon***/}
            <SearchIcon
                className={"w-8 h-7 text-center mr-3 hidden sm:block"}
                color="#015F8A"
            />
            {/***Input***/}
            <input
                placeholder={"Search Github User...."}
                type={"text"}
                className ="flex-1 h-full outline-0 px-5 py-3 bg-transparent text-base sm:text-lg
                "
            />
            <button className="btn-search">
                Search
            </button>
        </div>
    )
}
export default Search;