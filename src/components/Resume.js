import React, { useState, useRef, useEffect } from "react";

const Resume = () => {
    const [opened, setOpened] = useState(false);
    const [nextDialogue, setNextDialogue] = useState(false);

    const gatchaClick = () => {
        setOpened(true);
    }

    return(
        <div id="resume" class="section">
            <h1>RESUME GATCHA</h1>
            <div id="gatcha-container">
                <div class="gatcha-section" >
                    <p id="gatcha-instructions-1" class="dialogue" onAnimationEnd={() => setNextDialogue(true)}>Random resumes up for grabs!</p> 
                </div>
                <div class="gatcha-section">
                    <div class={opened ? "gatcha open" : "gatcha closed"} onClick={gatchaClick}>
                        {opened ?
                            <a id="resume-container" href="Chee Jia Hua Resume 2025.pdf" download>
                                <p id="resume-title" class="resume-text" >You got Misha's Resume!</p>
                                <br/>
                                <p class="resume-text">Click to download</p>
                            </a>
                            : null}
                    </div>
                </div>
                <div  class="gatcha-section">
                    {nextDialogue ? <p id="gatcha-instructions-2" class="dialogue">Click to see which you'll get!</p> : null}
                </div>
                {opened ? (
                    <>
                        <div class="sparkles" style={{bottom: "100%", left: "5%"}} />
                        <div class="sparkles" style={{bottom: "10%", left: "8%"}} />
                        <div class="sparkles" style={{bottom: "50%", left: "15%"}} />
                        <div class="sparkles" style={{bottom: "35%", left: "35%"}} />
                        <div class="sparkles" style={{bottom: "75%", left: "50%"}} />
                        <div class="sparkles" style={{bottom: "95%", right: "20%"}} />
                        <div class="sparkles" style={{bottom: "80%", right: "10%"}} />
                        <div class="sparkles" style={{bottom: "55%", right: "30%"}} />
                            <div class="sparkles" style={{ bottom: "40%", right: "20%" }} />
                    </>) : null}
            </div>
            <div class="divider" />
        </div>
    )
}

export default Resume;