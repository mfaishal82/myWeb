import React from "react";
import "../src/App.css";
// import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {

    return (
        <section className="container">
            <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                <div style={{display: "flex", margin: "3px", borderRadius: "1.5rem", border: "1px solid black", paddingRight: "5px"}}>
                    <span className="green-light" /> open to work
                </div>
            </div>
            <a href="/home">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "95vh"}}>
                    <div>
                        <h1>Hi, I'm FullStack Developer</h1>
                    </div>

                    <div>
                        <h3 style={{padding: "20px", borderRadius: "1.5rem", border: "1px solid black"}}>Click screen to continue</h3>
                    </div>
                </div>
            </a>
        </section>
    )
}

export default LandingPage;