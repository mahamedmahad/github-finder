import React from 'react';

//components
import Search from "../search";
import Result from "../result";

//icons
import {SunIcon} from "@heroicons/react/outline";
import {MoonIcon} from "@heroicons/react/solid";


const GithubUSer = () => {
    return (
        <div className=" w-full  mt-[50px] mx-auto content text-[#1C1C1C]
        max-w-[690px] sm:rounded">
            {/**Header title with toggle Icons***/}
            <div className={"p-5 flex align-center justify-between"}>
                <h1 className={" sm:text-[25px] font-bold"}>
                    Github Finder
                </h1>
                {/**Toggle icon:dark-light mode!*/}
                <SunIcon className={"icon-w-h "}/>
                {/*<MoonIcon className={"icon-w-h"}/>*/}
            </div>
            {/**Search Component***/}
            <Search/>
            {/**Result Component***/}
            <Result/>

        </div>
    )
}
export default GithubUSer;