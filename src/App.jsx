import React, { Component } from "react";
import SectionCard from "@components/section-card";
import './App.scss';

class App extends Component {
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
      <main>
        <div className='section'>
          <ul>
            {this.state.sections.map(section => (
              <li key={section.key}>
                <SectionCard name={section.name} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
