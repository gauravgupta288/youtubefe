import React from "react";


export default function VideoCard(props : any){
    return (
        <div className="p-3">
            <img src={props.img_tumbnail} className="h-60 w-30 object-cover" alt="Jigra" />
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                    <img src={props.img_logo} className="h-10 w-10 object-cover rounded-full" alt="Jigra" />
                </div>
                <div className="col-span-11 pl-2">
                    <div className="col-span-11 pl-2  text-base">
                    {props.title} 
                    </div>
                    <div className="text-gray-600 ">
                        <div className="col-span-11 pl-5 text-base">
                        {props.channel} 
                        </div>

                        <div className="col-span-11 pl-2  text-base">
                        {props.views} | {props.timestamp} 
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}