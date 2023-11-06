import './Sidebar.css';
import { GeneralInfo } from "../../components/generalInfo";
import { Skills } from '../../components/skills';
import { ContactMe } from '../../components/contactMe';
import { ButtonAside } from '../../components/buttonAside';

export const Sidebar = () => {
    return(
        <div className='sidebar'>
            <GeneralInfo/>
            <Skills />
            <ContactMe />
            <ButtonAside />
        </div>
    )
}