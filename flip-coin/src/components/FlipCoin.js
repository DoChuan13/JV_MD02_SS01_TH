import React, { Component } from 'react'
import slive_1 from '../assets/images/1988s_slive_1.jpg'
import slive_2 from '../assets/images/1988s_slive_2.jpg'

class FlipCoin extends Component {
    render() {
        let status = this.props.statusCoin;
        // console.log(status);
        let pictureStatus;
        if (status) {
            pictureStatus = <img src={slive_1} alt="" />
        }
        else {
            pictureStatus = <img src={slive_2} alt="" />
        }
        return (
            <div>
                {pictureStatus}
            </div>
        )
    }
}

export default FlipCoin
