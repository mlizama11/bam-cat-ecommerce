import React, { Component } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/ScrollButton.css"

export default class ScrollButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div className="back-to-top show-back-to-top">
                {is_visible && (
                    <div className="top" onClick={() => this.scrollToTop()}>
                    <FaArrowUp size={24}/>
                    </div>
                )}
            </div>
        );
    }
}