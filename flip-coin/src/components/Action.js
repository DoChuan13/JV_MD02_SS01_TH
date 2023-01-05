import React, { Component } from 'react'

class Action extends Component {
    flipCoin = () => {
        let a = Math.random(0, 1);
        // console.log(a);
        if (a >= 0.5) {
            this.props.result(true)
        }
        else {
            this.props.result(false)
        }
    }

    render() {
        let statusCoin = this.props.status
        let result;
        if (statusCoin) {
            result = 'Head';
        }
        else {
            result = 'Tail';
        }
        return (
            <div>
                <button onClick={this.flipCoin}>FLIP MEEEE!</button>
                {/* <p>Resul in this time is {this.onChangeCoint}</p> */}
                <p>Out of {this.props.headFlip + this.props.tailFlip} flips, there have been {this.props.headFlip} heads and {this.props.tailFlip} tails</p>
            </div>
        )
    }
}

export default Action