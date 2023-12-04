
export const Tab = ({tabInfo, setTabInfo, index}) =>{
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
   
    const onClick = () =>{
        
        setTabInfo(items[index - 1].children)
    }
    return <div onClick={onClick} style={{padding:10}}>
      <p>Tab {index}</p>
      <p>{tabInfo}</p>
      </div>
}