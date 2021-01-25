import React, { Component } from "react";
import "./Sidebar.scss";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { changeMenu, activeMenu } = this.props;

        return (
                <nav className="Sidebar">
                    <ul className="Sidebar-nav">
                        <li className="nav-item">
                            <a
                                href="#about"
                                className="nav-link"
                                onClick={(event) => changeMenu(event, "About")}
                            >
                                <i className="lni lni-information"></i>
                                <span className="link-text about">About</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                href="#stats"
                                className="nav-link"
                                onClick={(event) => changeMenu(event, "Stats")}
                            >
                                <i className="lni lni-stats-up"></i>
                                <span className="link-text stats">Stats</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                href="#sponsors"
                                className="nav-link"
                                onClick={(event) =>
                                    changeMenu(event, "Sponsor")
                                }
                            >
                                <i className="lni lni-dollar"></i>
                                <span className="link-text sponsors">Sponsors</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                href="#faqs"
                                className="nav-link"
                                onClick={(event) => changeMenu(event, "FAQ")}
                            >
                                <i className="lni lni-question-circle"></i>
                                <span className="link-text faqs">FAQs</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                href="#team"
                                className="nav-link"
                                onClick={(event) => changeMenu(event, "Team")}
                            >
                                <i className="lni lni-network"></i>
                                <span className="link-text team">Team</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                href="#contact"
                                className="nav-link"
                                onClick={(event) =>
                                    changeMenu(event, "Contact")
                                }
                            >
                                <i className="lni lni-phone"></i>
                                <span className="link-text contact">Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
        );
    }
}

export default Sidebar;
