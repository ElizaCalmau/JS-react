import './ChangableBlock.css'
import { Portfolio } from '../portfolio'
import { Info } from '../info'
import { useState } from 'react'

export const ChangableBlock = () => {
    const [block, setBlock] = useState(<Info/>);

    function handleCLick (e) {
        block.type.name == 'Info' ? setBlock(<Portfolio/>):setBlock(<Info/>);
        console.log(e.target.innerHTML);
        console.log(e)
        handleToggle();
        handleText();
    }

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
      };

    const [text, setText] = useState('See Portfolio');

    const handleText = () => {
        text == 'See Portfolio' ? setText('See Bio') : setText('See Portfolio');
    }

    return(
        <div className="changable_block">
            {block}
            <button className= { isActive? 'unclicked_button' : 'clicked_button'} onClick={handleCLick}>{text}</button>
        </div>
    )
}