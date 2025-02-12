import React from "react";

const Banner = () => {
    return(
        <div id="home" class="home">
            <img class="moving clouds" src={require('../assets/cloud1.png')}/>
            <h1>MISHA'S PORTFOLIO</h1>
            <a id="arrow-down" href="#aboutMe"/>
        </div>
    )
}

export default Banner;