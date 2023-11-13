import { useState } from 'react'
import { Portfolio } from '../portfolio'
import { Info } from '../info'
import './ChangableBlock.css'

export const ChangableBlock = () => {
    const [block, setBlock] = useState(<Info/>);
    const [text, setText] = useState('See Portfolio');
    const [isActive, setActive] = useState(true);

    function handleCLick () {
        console.log(block)
        block.type.name === 'Info' ? setBlock(<Portfolio/>):setBlock(<Info/>);
        handleToggle();
        handleText();
    }

    function handleToggle () {
        setActive(!isActive);
      };

    function handleText () {
        text == 'See Portfolio' ? setText('See Bio') : setText('See Portfolio');
    }

    return(
        <div className="changableBlock">
            {block}
            <button className= { isActive? 'unclickedButton' : 'clickedButton'} onClick={handleCLick}>{text}</button>
        </div>
    )
}