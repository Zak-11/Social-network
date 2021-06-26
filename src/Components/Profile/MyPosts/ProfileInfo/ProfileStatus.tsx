import React from "react";


type ProfilePropsType = {
    status: string
}

export const ProfileStatus = (props:ProfilePropsType) => {

    return (
   <>
       <div>
           <span>{props.status}</span>
       </div>
<div>
    <input value={props.status}/>
</div>

   </>
    )
}
