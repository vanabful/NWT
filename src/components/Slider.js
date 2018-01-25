import React, { Component } from 'react'
import FontAwesome from "react-fontawesome";

class Slider extends Component {

    render() {
        const image1 = this.props.imageUrl;

        const sectionStyle = {
            backgroundImage: "url(" + require('../images/' + image1 + '.jpg') + ")",
            overflow: "hidden"
        };

        return(
            <div className="animal-more__container__left" style={sectionStyle}>
                <div className="animal-more__container__left__overlay"></div>
                <FontAwesome name="chevron-left" className="left-arrow"/>
                <FontAwesome name="chevron-right" className="right-arrow"/>

                <div className="animal-more__container__left__slider">
                    <FontAwesome name="circle" className="circles"/>
                    <FontAwesome name="circle-thin" className="circles"/>
                </div>
            </div>
        );
    }
}

export default Slider;