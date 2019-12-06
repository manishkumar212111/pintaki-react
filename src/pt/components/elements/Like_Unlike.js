import React , {useState} from 'react';
import global from '../../utils/globals'

const Like_Unlike = (props)=>{
    let [like , setLike] = useState(props.like);
    let handleClick = () => {
        let remember_digest = global.checkUserLogin();
        if(remember_digest){
            
            setLike(!like);
        }
    }
    return (
        <i class={`fa ${like ? "fa-heart" : "fa-heart-o"}`} aria-hidden="true" onClick={handleClick}></i>
    )
    
}
export default Like_Unlike;