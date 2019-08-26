import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div
                        className="left brand-logo"
                        style={{ margin: '0 10px' }}
                    >
                        Marvel Test
                    </div>
                    <ul className="right">
                        
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;