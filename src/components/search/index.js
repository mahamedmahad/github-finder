import React from 'react';

import {SearchIcon} from "@heroicons/react/outline";

const Search = ({searchTerm, setSearchTerm, submit}) => {


    return (
        <div className={"flex items-center  my-5 content bg-[#F6F6F6] dark:bg-[#3D4653] dark:text-[#F9F9F9]  " +
            "rounded sm:space-x-2"}>
            {/***Search Icon***/}
            <SearchIcon
                className={"w-7 h-7 text-center hidden sm:block  sm:animate-bounce"}
                color="#015F8A"
            />
            {/***Input***/}
            <input
                placeholder={"Search Github @user...."}
                type={"text"}
                className ="flex-1 h-full outline-0 border-0 sm:px-5 py-3 bg-transparent text-base
                "
                onChange={(e)=> setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <button className="btn-search" onClick={submit}>
                Search
            </button>
        </div>
    )
}
export default Search;