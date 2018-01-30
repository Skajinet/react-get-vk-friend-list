import React, {Component} from "react";
import {connect} from 'react-redux';

class Friendlist extends Component {
    componentWillMount() {
        fetch('http://msg.9ek.ru/friendList/vk')
            .then((response)=> response.json())
            .then((responseJson)=> {
            console.log(responseJson);
            })
    }


    render() {

        return (
            <div>
                <h2>{this.props.car.name}</h2>
                <img src={this.props.car.img} /> <br/>
                <p>{this.props.car.descr}</p>
                <p>Скорость: {this.props.car.speed}, вес:{this.props.car.weight}</p>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        car: state.active
    };
}
export default connect (mapStateToProps)(Friendlist);