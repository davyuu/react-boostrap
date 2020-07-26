import React, { Component } from "react";

import SectionCard from "@components/section-card";
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          key: 'notes',
          name: 'Notes',
          icon: 'description',
          route: '/notes'
        }
      ]
    }
  }

  render() {
    return (
      <div className='home'>
        <ul>
          {this.state.sections.map(section => (
            <li key={section.key}>
              <SectionCard name={section.name} to={section.route} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
