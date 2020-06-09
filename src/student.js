import React from "react";

function Student(props){
    return <div>
         Hello <strong>{props.stName}</strong>!, age {props.stAge}
        <h1>PIAIC CNC Specialist</h1>
        <h2>A four-quarter computing program.</h2>
        <ol >
            <li>Quarter 1: A Cloud Native Computing Foundation.</li>
            <ul>
                <li>Introduction to CNC</li>
                <li>Introduction to Linux & Bash</li>
                <li>Docker</li>
                <li>Kubernetes</li>
            </ul>
            <hr />
            <li>Quarter 2: Introduction to Application Development.</li>
            <ul>
                <li>GIT</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
            </ul>
            <hr />
            <li>Quarter 3: Web & Mobile Application Development</li>
            <ul>
                <li>Javscript</li>
                <li>MongoDB</li>
                <li>Express</li>
            </ul>   
            <hr />
            <li>Quarter 4: Advanced Web & Mobile Applicaton Development</li>
            <ul>
                <li>React</li>
                <li>Node.js</li>
            </ul>
            <hr />
        </ol>        
    </div>
}

export default Student;