import React, { Component } from "react";
import FAQitem from "./FAQitem";
import "./FAQ.scss";

class FAQ extends Component {
    render() {
        return (
            <div className="faq">
                <h3 style={{color:"#203246", fontFamily:"Gentona", fontSize:"4vw", letterSpacing:"0.1em"}}>FAQ</h3>
                <ul>
                    <li>
                        <FAQitem
                            question="What is Hack36?"
                            answer="Hack36 is a 36 hpur long event where thousands of students from all over India
							 come together to work on cool new software 🕹 and/or hardware 🛠 projects. Websites
                            🖥 and mobile apps 📱 are common types of hacks, but you can build anything! Think outside
                            of the box! 📦"
                        />
                    </li>

                    <li>
                        <FAQitem
                            question="How does a virtual hackathon work?"
                            answer="We will 🅱️e announcing more details in the coming months, 🅱️ut all of the
                            essential parts of our event will remain the same! You'll still get to meet other hackers,
                            talk to our sponsors 💸, listen to prominent leaders 🧑‍💼 in tech, and win amazing prizes
                            🎖!"
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

export default FAQ;
