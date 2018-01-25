import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Slider from '../components/Slider.js';
import FontAwesome from 'react-fontawesome';

class MoreAboutAnimal extends Component {

    render() {
        return(
            <section className="animal-more">
                <div className="animal-more__container">
                    <Slider imageUrl={this.props.animal.image}/>    
                    <div className="animal-more__container__right">
                        <div className="animal-more__container__right__name-age-gender">
                            <h2>{this.props.animal.name}</h2>
                            <label>{this.props.animal.gender}, {this.props.animal.age}</label>
                        </div>
                        <p className="animal-more__container__right__description">
                            {this.props.animal.description}
                        </p>
                        <div className="animal-more__container__right__details">
                            <ul>
                                <li><FontAwesome name="paw" /><label>{this.props.animal.breed}</label></li>
                                <li><FontAwesome name="heartbeat"/><label>{this.props.animal.health}</label></li>
                                <li><FontAwesome name="map-marker" /><label>{this.props.animal.location.name}</label></li>
                                <li><FontAwesome name="clock-o" /><label>{this.props.animal.timeInAzil}</label></li>
                            </ul>
                        </div>
                       <Link to={`/animals/${this.props.animal.name}/${this.props.animal.location.name}`} className="animal-more__container__right__link">
                            <button>Go to location</button>
                       </Link>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        animal: state.animals.clickedAnimal
    };
}

export default connect (mapStateToProps)(MoreAboutAnimal);
