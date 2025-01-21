import {Logo as LogoType } from "../../config/interfaces";


export function Logo({image,title,subtitles} : LogoType){
return <div className="flex items-center ">
    <img src={image} className="w-32" />
    <div>
    <h2 className="text-white text-3xl">{title}</h2>
    <span className="text-white text-sm">{subtitles}</span>
    </div>
</div>
}