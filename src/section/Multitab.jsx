import { Tabs } from 'antd';
import './MultiTab.css'

const { TabPane } = Tabs;

export const MultiTab = () => {
    return (
      <div className='multiTabWrapper'>
      <Tabs defaultActiveKey="1" type="card">
        
        <TabPane tab="SUMMARY" key="1">
          <ul>
            <li>High-talented Front-End developer</li>
            <li>About 2 years of web technologies self-education</li>
            <li>A-Level React JS courses listener with high grades</li>
          </ul>
        </TabPane>

        <TabPane tab="SKILLS" key="2">
          <h3>Frontend</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML/CSS</li>
            <li>TypeScript</li>
            <li>Ant Design</li>
            <li>Slick</li>
          </ul>
          <h3>Other</h3>
          <ul>
            <li>REST API</li>
            <li>npm</li>
            <li>git</li>
            <li>Vite</li>
            <li>Vercel</li>
            <li>ESlint</li>
            <li>Husky</li>
            <li>Unix System</li>
            <li>Windows system</li>
            <li>Figma</li>
          </ul>
        </TabPane>

        <TabPane tab="EXPERIENCE" key="3">
          <h2>Education modular Coffee Shop project </h2>
          <a href='https://elizacalmau.github.io/module-js-15-coffeshop/'>Link for staging</a>
          <h3>Features:</h3>
          <ul>
            <li>Vanilla JS, HTML, CSS</li>
            <li>Active Shopping Cart</li>
            <li>Responsive design</li>
            <li>Products are being rendered dynamically</li>
            <li>The project emulates behavior of the live store</li>
          </ul>
          <br/>
          <h2>CV on React JS </h2>
          <a href=''>Link for staging</a>
          <h3>Features:</h3>
          <ul>
            <li>React JS, HTML, CSS</li>
            <li>Conditional rendering</li>
            <li>React Hooks</li>
            <li>Responsive design in progress</li>
          </ul>
        </TabPane>
        
        <TabPane tab="LANGUAGES" key="4">
          <ul>
            <li>English A2-B1 level (reading, writing, speaking)</li>
            <li>Ukrainian (native)</li>
          </ul>
        </TabPane>
      </Tabs>
      </div>
    );
  };