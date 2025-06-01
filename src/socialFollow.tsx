
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import {
    faFacebook,
    faTelegram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (

        <div className="social-container">

            <h3>Find Us</h3>
            <a href="https://www.facebook.com/Kriptolitika"
               className="facebook social"
            >

            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://t.me/kriptovaliutu_signalai"
               className="telegram social"
            >
                <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
        </div>
    );
}