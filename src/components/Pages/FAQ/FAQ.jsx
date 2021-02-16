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
                            question="What is a Hackathon?"
                            answer="An attempt to use tech to hack into real world problems to solve them better. Every team needs to develop a product from scratch during those 36 hours."
                        />
                    </li>
                    
                    
                    <li>
                        <FAQitem
                            question="Do I Need To Pay Any Money To Register For The Hackathon?"
                            answer="No. You do not have to pay anything to anyone to register yourself for Hack36"
                        />
                    </li>
                    <li>
                        <FAQitem
                            question="Who Can Apply?"
                            answer="Anyone having a knack of solving real life problems can apply for the hackathon."
                        />
                    </li>
                    <li>
                        <FAQitem
                            question="Where’s the schedule?"
                            answer="We’ll release a detailed timeline in March."
                        />
                    </li>
                    <li>
                        <FAQitem
                            question="What Is The Procedure Of Forming A Team?"
                            answer="After registration, participants are required to form their team by logging in"
                        />
                    </li>
                    <li>
                        <FAQitem
                            question="How does a virtual hackathon work?"
                            answer="We will be announcing more details in the coming months, but all of the essential parts of our event will remain the same! You'll still get to meet other hackers, talk to our sponsors, listen to prominent leaders in tech, and win amazing prizes"
                        />
                    </li>
                    <li>
                        <FAQitem
                            question="Will there still be goodies and swag?"
                            answer="Definitely yes!"
                        />
                    </li>
                    <li>
                        <FAQitem
                            question="How Will The Shortlisting Be Done?"
                            answer="Participants will be shortlisted based on their GitHub profile and resume."
                        />
                    </li>
                    <li>
                        <FAQitem
                            question="What Can Be The Size Of The Team?"
                            answer="A team can consist of 2 to 4 members."
                        />
                    </li>
                    <li>
                        <FAQitem
                            question="What Is The Criteria For Selection Of A Team?"
                            answer="If 75% members of a team have a decent profile, the team will get shortlisted. In a rare case where a team is not shortlisted, that team can contact us for the re-evaluation of their team."
                        />
                    </li>
                    <li>
                        <FAQitem
                            question="What We Can Build?"
                            answer="You can build anything you are passionate about like some web app, mobile app or something using hardware."
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

export default FAQ;
