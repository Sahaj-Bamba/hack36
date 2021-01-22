import React, { Component } from "react";
import "./Navbar1.scss";

class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { changeMenu, activeMenu } = this.props;

        return (
            <header>
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a
                                href="#about"
                                class="nav-link"
                                onClick={(event) => changeMenu(event, "About")}
                            >
                                <i class="lni lni-information"></i>
                                <span class="link-text about">About</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                href="#stats"
                                class="nav-link"
                                onClick={(event) => changeMenu(event, "Stats")}
                            >
                                <i class="lni lni-stats-up"></i>
                                <span class="link-text stats">Stats</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                href="#sponsors"
                                class="nav-link"
                                onClick={(event) =>
                                    changeMenu(event, "Sponsor")
                                }
                            >
                                <i class="lni lni-dollar"></i>
                                <span class="link-text sponsors">Sponsors</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                href="#faqs"
                                class="nav-link"
                                onClick={(event) => changeMenu(event, "FAQ")}
                            >
                                <i class="lni lni-question-circle"></i>
                                <span class="link-text faqs">FAQs</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                href="#team"
                                class="nav-link"
                                onClick={(event) => changeMenu(event, "Team")}
                            >
                                <i class="lni lni-network"></i>
                                <span class="link-text team">Team</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                href="#contact"
                                class="nav-link"
                                onClick={(event) =>
                                    changeMenu(event, "Contact")
                                }
                            >
                                <i class="lni lni-phone"></i>
                                <span class="link-text contact">Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar1;
