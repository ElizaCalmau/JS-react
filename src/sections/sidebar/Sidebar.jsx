import './Sidebar.css';
import { GeneralInfo } from "../../components/generalInfo";
import { Skills } from '../../components/skills';
import { ContactMe } from '../../components/contactMe';
import { Photo } from '../../components/photo';

export const Sidebar = () => {
    return(
        <div className='sidebar'>
            <GeneralInfo/>
            <Skills />
            <ContactMe />
            <Photo />
        </div>
    )
}