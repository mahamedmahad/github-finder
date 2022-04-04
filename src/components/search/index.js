import React, {useEffect, useState} from 'react';

import {SearchIcon} from "@heroicons/react/outline";
import {useResultContext} from "../../context/result-context";
import {useDebounce} from "use-debounce";

const Search = () => {
    const [input, setInput] = useState('')
    const {setSearchTerm} = useResultContext()
    const [debounceValue] = useDebounce(input, 500)

    useEffect(() => {
        if(debounceValue) setSearchTerm(debounceValue)
    }, [debounceValue])

    return (
        <div className={"flex items-center  my-5 content bg-[#F6F6F6] dark:bg-[#3D4653] dark:text-[#F9F9F9]  " +
            "rounded sm:space-x-2 group"}>
            {/***Search Icon***/}
            <SearchIcon
                className={"w-7 h-7 text-center hidden sm:block  sm:animate-bounce transition ease-in-out"}
                color="#015F8A"
            />
            {/***Input***/}
            <input
                placeholder={"Search Github @user...."}
                type={"text"}
                className ="flex-1 h-full outline-0 border-0 sm:px-5 py-3 bg-transparent text-base
                "
                onChange={(e)=> setInput(e.target.value)}
                value={input}
            />
            {/**

             <button className="btn-search" onClick={submit}>
             Search
             </button>
             */}
        </div>
    )
}
export default Search;