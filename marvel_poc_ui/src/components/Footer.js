import React, { Component } from 'react';

class Footer extends Component {
    render() {

        const date = new Date();
        //console.log(this.props);
        return (
            <footer className="page-footer" style={{ backgroundColor: "#ED1D24" }}>
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                    
                </div>
                <div className="col l4 offset-l2 s12">
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              <a className="grey-text text-lighten-4 right" href="https://www.marvel.com/">Data provided by © {date.getFullYear()} Marvel</a>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;