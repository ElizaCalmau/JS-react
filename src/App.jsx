import './App.css'
import { Tab } from './components/Tab';
import { Table } from './components/Table'
import { useState } from 'react';

function App() {
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];
  const [tabInfo, setTabInfo] = useState(items[0].children)
  return (
    <>
    <div style={{display:'flex'}}>
      <Tab index={1} setTabInfo={setTabInfo} items={items}/>
      <Tab index={2} setTabInfo={setTabInfo} items={items}/>
      <Tab index={3} setTabInfo={setTabInfo} items={items}/>
    </div>
    <div> {tabInfo}</div>
    
      <Table />
    </>
  );
}

export default App;