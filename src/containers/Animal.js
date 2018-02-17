import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { clickedAnimal, deleteAnimal } from '../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';


class Animal extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    onClick(event) {
        this.props.actions.clickedAnimal(this.props.animal);
    } 

    handleDelete() {
        console.log(this.props.id);
        this.props.actions.deleteAnimal(this.props.id);
    }

    render() {

        const { animal } = this.props;

        return (
            <div className="animal">
                <div className="animal__image">    
                    <img src={require('../images/' + animal.image + '.jpg')} alt={animal.name}/>
                </div>
                <div className="animal__info">
                    <aside className="animal__info__text">
                        <h2 className="animal__info__text__name">{animal.name}</h2>
                        <label>{animal.gender},{animal.age}</label>
                        <label>{animal.location.name}</label>
                    </aside>
                    <Link to={`/animals/${animal.name}`} className="animal__info__link">
                        <input type="button" value="View" onClick={this.onClick} />
                    </Link>
                </div>
                <FontAwesome name="times" className="animal__delete" onClick={this.handleDelete}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
        {
            clickedAnimal,
            deleteAnimal
        },
        dispatch
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Animal);