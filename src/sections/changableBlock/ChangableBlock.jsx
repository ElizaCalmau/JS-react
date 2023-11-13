import { useState } from 'react'
import { Portfolio } from '../portfolio'
import { Info } from '../info'
import './ChangableBlock.css'

export const ChangableBlock = () => {
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [text, setText] = useState('See Portfolio');
    const [isActive, setActive] = useState(true);

    function handleCLick () {
        setShowPortfolio((prevState)=> {
            return !prevState;
        })
       
        //handleToggle();
        //handleText();
    }

    function handleToggle () {
        setActive(!isActive);
      }

    function handleText () {
        text == 'See Portfolio' ? setText('See Bio') : setText('See Portfolio');
    }

    return(
        <div className="changableBlock">
            {showPortfolio ? <Portfolio/> : <Info/>}
            <button className= { isActive? 'unclickedButton' : 'clickedButton'} onClick={handleCLick}>{text}</button>
        </div>
    )
}