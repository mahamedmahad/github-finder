import React from 'react';

//icon
import {LocationMarkerIcon} from "@heroicons/react/solid";
import TwitterIcon from '../../images/twitter.png';
import {LinkIcon} from "@heroicons/react/outline";

const Result = ({user}) => {

    const avatarImg = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

    return (
        <div className="content bg-[#F6F6F6] rounded dark:bg-[#3D4653] dark:text-white">

            <div className="p-3 space-x-4 flex items-center justify-between mb-3">
                <img
                    src={avatarImg}
                    alt={""}
                    className=" w-9 h-9 sm:w-16 sm:h-16 rounded-full ring-4 ring-[#015F8A] object-cover"
                />
                {/**User name and user Tag**/}
                <div className="flex-1 space-y-2">
                    <h2 className="text-sm  sm:text-[20px] font-bold ">Evar</h2>
                    <p className="text-sm text-[#6F6F6F] dark:text-[#49A8F5]">@evar_2022</p>
                </div>
                <span className="flex items-center text-[13px] sm:text-base">
                    Joined
                    <p className="text-[13px]  font-semibold ml-2 dark:text-[#C7C7C7]">
                        Jan 25 2013
                    </p>
                </span>
            </div>

            <div className="p-3 flex items-center justify-center flex-col">

                {/***Bio***/}
                <div className="mb-5 dark:text-[#C7C7C7]">
                    <p className="text-[16px]">Bio</p>
                </div>
                {/****Rep/Followers block**/}
                <div className="bg-[#FDFDFD] dark:bg-[#2E3749] flex  items-center justify-center p-3 space-x-3
                rounded-lg min-w-min	">
                    {/****Rep block**/}
                    <div className="user-info ">
                        <h3 className="text">Repos</h3>
                        <p className="text dark:text-white">37</p>
                    </div>
                    {/****Followers block**/}
                    <div className="user-info ">
                        <h3 className="text">Followers</h3>
                        <p className="text dark:text-white">37</p>
                    </div>
                    {/****Followings block**/}
                    <div className="user-info">
                        <h3 className="text">Following</h3>
                        <p className="text dark:text-white">37</p>
                    </div>
                </div>

                {/**Location and sosial**/}
                <div className="mt-5 p-3  flex items-start justify-between flex-wrap max-w-full mx-auto w-[400px]">
                    {/**Location*/}
                    <div className="sosial-info  ">
                        <LocationMarkerIcon className="sosial-icon text-[#B0B0B0]"/>
                        <span className="text-sm">Milan, Italy</span>
                    </div>
                    {/**Twitter***/}
                    <div className="sosial-info ">
                        <img
                            src={TwitterIcon}
                            alt="Twitter"
                            className="sosial-icon object-fit"
                        />
                        <span className="text-sm">EvarWall5</span>

                    </div>
                    {/****URL**/}
                    <div className="sosial-info ">
                        <LinkIcon className="sosial-icon text-[#B0B0B0]"/>
                        <a className="text-sm hover:underline" href="#">test.com</a>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Result;