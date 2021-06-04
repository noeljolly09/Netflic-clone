import React , {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import './nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    
    const history = useHistory();

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
        }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img 
                    onClick ={ () => history.push("/")}
                    className="nav_logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />

                <img
                    onClick={ () => history.push("/profile")}
                    className="nav_avatar"
                    src="https://styles.redditmedia.com/t5_3udmqn/styles/profileIcon_snoo3c979fea-f83f-4432-94b9-92efee1af24d-headshot.png?width=256&height=256&crop=256:256,smart&s=0be0ca50e96f9d229dda92162944ba37c13cc26e"/>

            </div>
            
        </div>
    );
}

export default Nav
