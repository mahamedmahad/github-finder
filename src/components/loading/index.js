import React from "react";

import {Rings } from "react-loader-spinner";

const Loading = () => {
    return <div className="flex items-center justify-center">
        <Rings  ariaLabel="loading-indicator" height={450} width={80} color="#00BFFF"/>
    </div>

}
export default Loading;