
export const Tab = ({tabInfo, setTabInfo, index, items}) =>{

    const onClick = () =>{
        setTabInfo(items[index - 1].children)
    }
    
    return <div onClick={onClick} style={{padding:10}}>
      <p>Tab {index}</p>
      <p>{tabInfo}</p>
      </div>
}