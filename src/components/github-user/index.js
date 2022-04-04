import React, {useContext, useEffect, useState} from 'react';

//context
import {ThemeContext} from "../../context/theme-context";
import {useResultContext} from "../../context/result-context";

//components
import Search from "../search";
import Result from "../result";
import Loading from "../loading";

//icons
import {SunIcon} from "@heroicons/react/outline";
import {MoonIcon} from "@heroicons/react/solid"


const GithubUSer = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const {searchTerm, loading, getUser, error} = useResultContext()


    useEffect(() => {
        getUser()
    }, [searchTerm])

    if (error) return <div>{error}</div>

    return (
        <div className=" w-full  mt-[50px] mx-auto content text-[#1C1C1C]
        max-w-[690px] sm:rounded">
            {/**Header title with toggle Icons***/}
            <div className={"p-5 flex align-center justify-between"}>
                <h1 className={" sm:text-[25px] font-bold dark:text-white"}>
                    Github Finder
                </h1>
                {/**Toggle icon:dark-light mode!*/}
                {theme === 'dark' ? (
                    <SunIcon className={"icon-w-h cursor-pointer dark:text-[#FFC875]"}
                             onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
                ) : (


                    <MoonIcon className={"icon-w-h cursor-pointer "}
                              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
                )}


            </div>
            <Search />
            {loading ? (
                <Loading/>
            ) : (
            <Result />

            )}



        </div>
    )
}
export default GithubUSer;