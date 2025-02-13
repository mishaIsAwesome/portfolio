import React, { useState, useRef, useEffect } from "react";
import Typed from 'typed.js';

const AboutMe = () => {
    const [dialogue, setDialogue] = useState(0);
    const el = useRef(null);
    const el2 = useRef(null);
    const el3 = useRef(null);
    const el4 = useRef(null);
    const typed = useRef(null);
    const typed2 = useRef(null);
    const typed3 = useRef(null);
    const typed4 = useRef(null);

    useEffect(() => {
        typed.current = new Typed(el.current, {
                strings: ["", "Name: Misha Chee Jia Hua"],
                typeSpeed: 10,
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
            typeSpeed: 10,
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
          strings: ["","Roles: QA Engineer, Frontend Developer, Game Programmer"],
            typeSpeed: 10,
            showCursor: false,
            onStringTyped: () => typed3.current.stop(),
            onComplete: () => setDialogue(4)
        });
        return () => {
          typed3.current.destroy();
        };
    }, []);
    
    useEffect(() => {
        typed4.current = new Typed(el4.current, {
          strings: ["","QA Engineer by day, aspiring Frontend Wizard by night! With two years of testing experience, I’ve broken (and fixed) more code than I can count. Now, I’m on a mission to turn those debugging skills into dazzling UI creations using React.js.", "When I’m not coding, I’m probably supporting my duelists in game, perfecting my frisbee throws, or planning my adventure with my favourite people. If you need someone who can build, test, and break things (in the best way possible)—I’m your person!"],
            typeSpeed: 10,
            showCursor: false,
            onStringTyped: () => typed4.current.stop(),
            onComplete: () => setDialogue(5)
        });
        return () => {
          typed4.current.destroy();
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
            case 4:
                typed4.current.start();
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
                    <p ref={el4} />
                    {dialogue != 5 ? <button id="next-button">Next {">"}</button> : null}
                </div>
            </div>
            <div class="sparkles" style={{bottom: "30%", left: "5%"}} />
            <div class="sparkles" style={{ bottom: "80%", right: "5%" }} />
            <img class="clouds" style={{ bottom: "80%", left: "-15%" }} src={require('../assets/cloud2.png')} />
            <div class="divider" />
        </div>
    )
}

export default AboutMe;