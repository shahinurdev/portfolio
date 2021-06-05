import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <section className="allSection">
        <div className="skills">
          <h1>Skills</h1>
          <div className="content">
            <div>
              <strong>Comfortable:</strong>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>React Router</li>
              <li>HTML</li>
              <li> CSS</li>
              <li>SASS</li>
              <li>Bootstrap</li>
            </div>
            <div>
              <strong>Familiar:</strong>
              <li> TypeScript</li>
              <li>Node.js</li>
              <li>Redux</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Material-UI</li>
              <li>React Bootstrap</li>
              <li>Wordpress</li>
              <li>React Native</li>
            </div>
            <div>
              <strong>Tools:</strong>
              <li>Git</li>
              <li>Github</li>
              <li>VS Code</li>
              <li>JEST</li>
              <li>Chrome Dev Tools</li>
              <li>Heroku</li>
              <li>Netlify</li>
              <li>Firebase</li>
              <li> Jira</li>
              <li>webpack</li>
            </div>
            {/* <div>
              <strong>Uint Test:</strong>
              <li>Jest</li>
              <li>Enzyme</li>
              <li>React-test</li>
              <li>SupperTest</li>
            </div> */}
          </div>
        </div>
        </section>
      );
};

export default Skills;