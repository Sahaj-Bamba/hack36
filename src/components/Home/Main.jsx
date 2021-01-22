import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar1/Navbar1";
import Footer from "../Footer/Footer";
import Content from "./Content";
import "./Main.scss";
import loader from "../../loader.gif";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { activeMenu: "Home", loading: true };
    }

    componentDidMount() {
        this.isLoading = setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.isLoading);
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
                {this.state.loading ? (
                    <div>
                        <img src={loader} className="loader" />
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" /> */}
                    </div>
                ) : (
                    <div className="MainContainer">
                        <Navbar1
                            changeMenu={this.changeMenu}
                            activeMenu={activeMenu}
                        />
                        <main>
                            <Navbar
                                changeMenu={this.changeMenu}
                                activeMenu={activeMenu}
                            />
                            <Content activeMenu={activeMenu} />
                        </main>
                        <Footer />
                    </div>
                )}
            </div>
        );
    }
}

export default Main;
