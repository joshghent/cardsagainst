import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-6">
          <div className="card card--black">
            <h3 className="card__title">I learned the hard way that you can't cheer up a grieving friend with</h3>
            <span className="card__blank"></span>
          </div>
        </div>
        <div className="col-6">
          <div className="card card--white">
            <h3 className="card__title">An icepick lobotomy.</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default About;