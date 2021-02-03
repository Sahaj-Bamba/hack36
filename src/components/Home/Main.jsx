import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Content from "./Content";
import "./Main.scss";
import loader from "../../files/loader.gif";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { activeMenu: "Home" };
    }

    changeMenu = (event, item) => {
        this.setState({
            activeMenu: item,
        });
        event.stopPropagation();
    };

    render() {
        const { activeMenu } = this.state;

        return (
            <div className="App">                
                <div className="MainContainer">
                    <div className="MainContent">
                        <Sidebar
                            changeMenu={this.changeMenu}
                            activeMenu={activeMenu}
                        />
                        <Content activeMenu={activeMenu} />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Main;
