import { useState } from 'react'
import { Portfolio } from '../portfolio'
import { Info } from '../info'
import './ChangableBlock.css'

export const ChangableBlock = () => {
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [text, setText] = useState('See Portfolio');

    function handleCLick () {
        setShowPortfolio((prevState)=> {
            return !prevState;
        })
       
        handleText();
    }

    function handleText () {
        text == 'See Portfolio' ? setText('See Bio') : setText('See Portfolio');
    }

    return(
        <div className="changableBlock">
            { showPortfolio ? <Portfolio/> : <Info/> }
            <button className= { showPortfolio? 'clickedButton' : 'unclickedButton'} onClick={handleCLick}>{text}</button>
        </div>
    )
}