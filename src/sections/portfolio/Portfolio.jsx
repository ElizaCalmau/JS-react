import './Portfolio.css'

export const Portfolio = () => {
    return(
        <div className='portfolio_wrapper'>
            <div className='portfolio_ph_1'>
                <img src='https://raw.githubusercontent.com/ElizaCalmau/JS-react/project/cv/src/assets/portfolio1.jpg' alt='ph1'/>
            </div>
            <div className='portfolio_ph_2'>
            <img src='https://raw.githubusercontent.com/ElizaCalmau/JS-react/project/cv/src/assets/portfolio2.jpg' alt='ph2'/>
            </div>
            <div className='portfolio_ph_3'>
            <img src='https://raw.githubusercontent.com/ElizaCalmau/JS-react/project/cv/src/assets/portfolio3.jpg' alt='ph2'/>
            </div>
        </div>
    )
}