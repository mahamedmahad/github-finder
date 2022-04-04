import React from "react";

const SosialInfo = ({Icon, title, image}) => {
    return (
        <div className="sosial-info">
            {Icon && <Icon className="sosial-icon text-[#B0B0B0]"/>}
            {image && <img src={image} alt={'image'} className="sosial-icon object-fit "/> }
            <a className="sm:text-[13px]" href={title}>{title}</a>
        </div>
    )
}
export default SosialInfo;