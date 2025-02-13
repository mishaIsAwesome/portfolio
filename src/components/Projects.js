import React, { useState } from "react";

const Projects = () => {

    const [code, setCode] = useState("");
    const [blinking, setBlinking] = useState(false);
    const [dialogue, setDialogue] = useState(1);
    const projectCodes = ["143", "125"];

    const enterCode = async (num) => {
        var newCode = code.concat(num);
        setCode(newCode);

        if (newCode.length == 3) {
            setBlinking(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setBlinking(false);

            if (!projectCodes.includes(newCode)) {
                setCode("ERR");
                await new Promise(resolve => setTimeout(resolve, 1500));
                setCode("");
                setDialogue(2);
            } else {
                setCode("YES");
                await new Promise(resolve => setTimeout(resolve, 1500));
                setCode("");
                setDialogue(0);
            }
        }
    }

    return(
        <div id="projects" class="section">
            <div id="projects-container">
                <div id="numpad-screen" class={blinking ? "blinking" : ""}>{code}</div>
                <div id="numpad-container">
                    <div id="num-1" class="numpad" onClick={() => enterCode("1")}></div>
                    <div id="num-2" class="numpad" onClick={() => enterCode("2")}></div>
                    <div id="num-3" class="numpad" onClick={() => enterCode("3")}></div>
                    <div id="num-4" class="numpad" onClick={() => enterCode("4")}></div>
                    <div id="num-5" class="numpad" onClick={() => enterCode("5")}></div>
                    <div id="num-6" class="numpad" onClick={() => enterCode("6")}></div>
                    <div id="num-7" class="numpad" onClick={() => enterCode("7")}></div>
                    <div id="num-8" class="numpad" onClick={() => enterCode("8")}></div>
                    <div id="num-9" class="numpad" onClick={() => enterCode("9")}></div>
                </div>
            </div>
            {dialogue == 1 ? <p id="vending-instructions-1" class="dialogue">This is a project vending machine! You can dispense my projects from here</p> : null}
            {dialogue == 2 ? <p id="vending-instructions-1" class="dialogue">Enter the Project Code to view it!</p> : null}
            <div id="background-clouds">
                <img src={require('../assets/cloud2.png')} />
                <img src={require('../assets/cloud2.png')} />
            </div>
        </div>
    )
}

export default Projects;