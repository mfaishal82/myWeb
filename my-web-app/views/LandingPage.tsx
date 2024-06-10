import React from "react";
import "../src/App.css";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {

    return (
        <section className="container">
            <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                <div style={{display: "flex", margin: "3px"}}>
                    <span className="green-light" /> open to work
                </div>
            </div>
            <Link to="/home">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "95vh"}}>
                    <div>
                        <h1>Hi, I'm FullStack Developer</h1>
                    </div>

                    <div>
                        <h3 style={{border: "1px solid black", padding: "20px", borderRadius: "50%"}}>Click screen to continue</h3>
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default LandingPage;