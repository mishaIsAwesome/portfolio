import React, { useState, useRef, useEffect } from "react";
import Typed from 'typed.js';

const AboutMe = () => {
    const [dialogue, setDialogue] = useState(0);
    const el = useRef(null);
    const el2 = useRef(null);
    const el3 = useRef(null);
    const typed = useRef(null);
    const typed2 = useRef(null);
    const typed3 = useRef(null);

    useEffect(() => {
        typed.current = new Typed(el.current, {
                strings: ["", "Nickname: Misha"],
                typeSpeed: 50,
            showCursor: false,
            onStringTyped: () => {
                typed.current.stop(); 
            },
            onComplete: () => setDialogue(2),
            });
            return () => {
                typed.current.destroy();
            };
    }, []);

    useEffect(() => {
        typed2.current = new Typed(el2.current, {
          strings: ["","Age: 25"],
            typeSpeed: 50,
            showCursor: false,
            onStringTyped: () => typed2.current.stop(),
            onComplete: () => setDialogue(3)
        });
        return () => {
          typed2.current.destroy();
        };
    }, []);
    
    useEffect(() => {
        typed3.current = new Typed(el3.current, {
          strings: ["","Detailed-oriented software developer, age 25, looking to be a game programmer at your company. Always seeking to perform beyond basic requirements and to work on meaningful and impactful projects to gain knowledge while making a difference. Wishing to use innovative problem-solving skills and contribute fresh ideas to break boundaries with your company. Loves to read, play video games and play any sports!"],
            typeSpeed: 10,
            showCursor: false,
            onStringTyped: () => typed3.current.stop(),
            onComplete: () => setDialogue(4)
        });
        return () => {
          typed3.current.destroy();
        };
    }, []);
    
    const dialogueClick = () => {
        
        switch (dialogue) {
            case 0:
                setDialogue(1);
                typed.current.start();
            case 1:
                typed.current.start();
                break;
            case 2:
                typed2.current.start();
                break;
            case 3:
                typed3.current.start();
                break;
        }
    }

    return(
        <div id="aboutMe" class="section">
            <h1>ABOUT ME</h1>
            <div class="about-me-container">
                <div id="my-avatar-frame">
                    <img id="my-avatar" src={require('../assets/me.png')}/>
                </div>
                <div class="description" onClick={dialogueClick}>
                    {dialogue == 0 ? <p>Hi! Click here to learn more about me!</p> : null}
                    <p ref={el} /> 
                    <p ref={el2} />
                    <p ref={el3} />
                    {dialogue != 4 ? <button id="next-button">Next {">"}</button> : null}
                </div>
            </div>
        </div>
    )
}

export default AboutMe;