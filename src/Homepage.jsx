import { Link } from 'react-router-dom';

export const HomePage = () => {
    return <>
    <h1>Home</h1>
    <Link to='/contacts'> go to contacts </Link>
    </>
}