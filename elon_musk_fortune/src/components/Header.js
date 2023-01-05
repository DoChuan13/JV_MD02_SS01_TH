import React, { Component } from "react";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <img src='https://i.imgur.com/Tc9d8Ns.jpg' alt='photo'></img>
                </div>
                <div className='header-content'>
                    <h1>Spend Elon Musk's Fortune!</h1>
                    <p>
                        If Elon cashed out all of his stocks & assets today he would have
                        approximately $ 217000000000 (US Dollars) in his bank account.
                    </p>
                    <p>¿What would you spend it on? Have your receipt at the end!</p>
                </div>
                <div className='navbar-content'>
                    <div>Remaining: $ 217000000000 </div>
                    <div>You haven't spent a single dollar! start buying!</div>
                </div>
            </header>
        );
    }
}
export default Header;