import { Contacts } from '../components/contacts/Contacts'
import { Photo } from '../components/photo/Photo'
import { Position } from '../components/position/Position'
import './AboutMe.css'

export const AboutMe = () => {
    return<main>
            <Photo/>
            <Position/>
            <Contacts/>
         </main>
}