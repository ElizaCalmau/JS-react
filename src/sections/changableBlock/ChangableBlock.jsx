import './ChangableBlock.css'
import { Portfolio } from '../portfolio'
import { Info } from '../info'
import { useState } from 'react'

export const ChangableBlock = () => {
    const [block, setBlock] = useState(<Info/>);

    function handleCLick () {

        block.type.name == 'Info' ? setBlock(<Portfolio/>) :setBlock(<Info/>);
        handleToggle();
    }

    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };

    return(
        <div className="changable_block">
            {block}
            <button className={isActive? 'changable_button' : 'unfocus'} onClick={handleCLick}>See Portfolio</button>
        </div>
    )
}