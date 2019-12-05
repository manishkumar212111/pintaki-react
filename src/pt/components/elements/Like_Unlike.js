import React from 'react';


const Like_Unlike = (props)=>{
    return(
        <div>
          {props.like? <i class="fa fa-heart" aria-hidden="true"></i> 
          :
            <i class="fa fa-heart-o" aria-hidden="true"></i>}
        </div>
    )
}
export default Like_Unlike;