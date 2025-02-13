import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Misha Chee',
            message: message
        }
        
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                setName('');
                setEmail('');
                setMessage('');
                setSent(true);
            })
            .catch((error) => {
            console.error("Error sending email:", error)
        })
    }

    return(
        <div id="contact" class="section">
            <div id="contact-container">
                <h1 id="contact-title">CONTACT</h1>
                <p class="small-text">If you’re interested in working together, leave me a message!</p>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <label for="name-textbox">Name*</label>
                    <input id="name-textbox" type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
                    <label for="email-textbox">Email*</label>
                    <input id="email-textbox" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label for="message-textarea">Message*</label>
                    <textarea id="message-textarea" required  value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button id="send-button" class={sent ? "sent" : ""}>{sent ? "SENT!" : "SEND"}</button>
                </form>
                <p class="small-text">Check me out on my socials!</p>
                <div id="social-container">
                    <a id="linkedin"  href="https://www.linkedin.com/in/misha-chee" target="_blank"/>
                </div>
            </div>
            <img class="clouds" style={{ bottom: "75%", left: "5%" }} src={require('../assets/cloud1.png')}/>
            <img class="clouds" style={{ bottom: "15%", left: "73%" }} src={require('../assets/cloud2.png')}/>
        </div>
    )
}

export default Contact;