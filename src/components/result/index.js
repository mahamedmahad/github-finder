import React from 'react';

//icon
import {LocationMarkerIcon} from "@heroicons/react/solid";
import TwitterIcon from '../../images/twitter.png';
import {LinkIcon} from "@heroicons/react/outline";

const Result = ({user}) => {

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

    console.log(get(user.created_at));

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

                {/**Location and sosial**/}
                <div className="mt-5 p-3  flex items-start justify-between flex-wrap max-w-full mx-auto w-[400px]">
                    {/**Location*/}
                    <div className="sosial-info  ">
                        <LocationMarkerIcon className="sosial-icon text-[#B0B0B0]"/>
                        {user.location === null ? (
                            <span className="text-sm">Not Available</span>
                        ) : (
                            <span className="text-sm">{user.location}</span>
                        )}

                    </div>
                    {/**Twitter***/}
                    <div className="sosial-info ">
                        <img
                            src={TwitterIcon}
                            alt="Twitter"
                            className="sosial-icon object-fit"
                        />
                        {user.twitter_username === null ? (
                            <span className="text-sm">Not Available</span>
                        ) : (
                            <span className="text-sm">{user.twitter_username}</span>
                        )}

                    </div>
                    {/****URL**/}
                    <div className="sosial-info ">
                        <LinkIcon className="sosial-icon text-[#B0B0B0]"/>
                        {user.blog === null ? (
                                <a className="text-sm hover:underline" href="#">Not Available</a>
                            )
                            : (
                                <a className="text-sm hover:underline" href="#">{user.blog}</a>

                            )}
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Result;