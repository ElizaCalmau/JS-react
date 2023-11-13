import { useState } from 'react';

export const Button = () => {
    const [buttonText, setButtonText] = useState(false);
    
      function handleClick(){
        setButtonText((prevState) => {
          return !prevState;
        });
      }

    return (<button onClick={handleClick} style={{
        width: 100,
        height: 50,
        backgroundColor: buttonText ? 'green' : 'red'}}> {buttonText ? 'hello' : '' } </button>);
}