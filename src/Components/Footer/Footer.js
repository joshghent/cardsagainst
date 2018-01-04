import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <div className="container">
        <ul>
            <li>
              <a href="https://github.com/joshghent/cardsagainst/tree/develop" className="github__link"><img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="github"/></a>
            </li>
        </ul>
      </div>
    );
  }
}

export default Footer;