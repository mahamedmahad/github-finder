import React from 'react';

//component
import SosialInfo from "../sosialInfo";

//icons
import {LocationMarkerIcon, LinkIcon} from "@heroicons/react/solid";
import Twitter from '../../images/twitter.png'
import GithubIcon from '../../images/github.png';

import {useResultContext} from "../../context/result-context";

const Result = () => {
    const {user} = useResultContext()
    //get year,month and date
    /**
     * Given a date object, return a string with the date in the format: `day month year`
     * @param user - The date object that you want to convert.
     * @returns A string of the date in the format of "day month year"
     */
    const get = (user) => {
        let dateObj = new Date(user);
        let month = dateObj.toLocaleString("default", {month: 'short'});
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        return ` ${day} ${month} ${year}`;
    }

    //console.log(get(user.created_at));

    return (
        <div className="content bg-[#F6F6F6] rounded dark:bg-[#3D4653] dark:text-white">

            <div className="p-3 space-x-4 flex items-center justify-between mb-3">
                <img
                    src={user.avatar_url}
                    alt={user.name}
                    className=" w-9 h-9 sm:w-16 sm:h-16 rounded-full ring-4 ring-[#015F8A] object-cover"
                />
                {/**User name and user Tag**/}
                <div className="flex-1 space-y-2">
                    <h2 className="text-sm  sm:text-[20px] font-bold ">{user.name}</h2>
                    <p className="text-sm  font-semibold text-[#49A8F5]">@{user.login}</p>
                </div>
                <span className="flex items-center text-[13px] sm:text-base">
                    Joined
                    <p className="text-[13px]  font-semibold ml-2 dark:text-[#C7C7C7]">
                        {get(user.created_at)}
                    </p>
                </span>
            </div>

            <div className="p-3 flex items-center justify-center flex-col">

                {/***Bio***/}
                <div className="mb-5 dark:text-[#C7C7C7]">
                    {user.bio === null ? (
                        <p className="text-[16px]">Bio is not available</p>

                    ) : (
                        <p className="text-[16px]">{user.bio}</p>

                    )}
                </div>
                {/****Rep/Followers block**/}
                <div className="bg-[#FDFDFD] dark:bg-[#2E3749] flex  items-center justify-center p-3 space-x-3
                rounded-lg min-w-min	">
                    {/****Rep block**/}
                    <div className="user-info ">
                        <h3 className="text">Repos</h3>
                        <p className="text dark:text-white">{user.public_repos}</p>
                    </div>
                    {/****Followers block**/}
                    <div className="user-info ">
                        <h3 className="text">Followers</h3>
                        <p className="text dark:text-white">{user.followers}</p>
                    </div>
                    {/****Followings block**/}
                    <div className="user-info">
                        <h3 className="text">Following</h3>
                        <p className="text dark:text-white">{user.following}</p>
                    </div>
                </div>

                <div className="mt-5 p-2  flex items-start  justify-between flex-wrap w-3/4">
                    {user.location !== null ? (
                        <SosialInfo Icon={LocationMarkerIcon} title={user.location}/>

                        ): null}
                    {user.twitter_username !== null ? (
                    <SosialInfo image={Twitter} title={user.twitter_username}/>
                    ): null
                    }
                    {user.blog !== null ? (
                        <SosialInfo Icon={LinkIcon} title={user.blog}/>
                    ):null}
                    <SosialInfo Icon={LinkIcon} title={user.html_url} />
                </div>

            </div>


        </div>
    )
}
export default Result;