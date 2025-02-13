import React from "react";

const Banner = () => {
    return(
        <div id="home" class="home">
            <img id="cloud-1" class="clouds" src={require('../assets/cloud1.png')}/>
            <img id="cloud-2" class="clouds" src={require('../assets/cloud2.png')}/>
            <img id="cloud-3" class="clouds" src={require('../assets/cloud3.png')}/>
            <h1>MISHA'S PORTFOLIO</h1>
            <a id="arrow-down" href="#aboutMe"/>
        </div>
    )
}

export default Banner;