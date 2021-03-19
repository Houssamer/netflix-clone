import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from './logo.png'
import avatar from './avatar.jpg'
import { useHistory } from 'react-router';

function Navbar() {

    const [black, setBlack] = useState(false);
    const history = useHistory();

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 100) {
                setBlack(true);
            } else {
                setBlack(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", window);
        }
    }, [])

    return (
        <div className={`navbar ${black && `navbar__black`}`}>
            <img 
                src={logo} 
                alt="netlix logo" 
                className="navbar__logo"
                onClick={() => history.push("/")}
            />
            <img 
                src={avatar} 
                alt="" 
                className="navbar__avatar"
                onClick={() => history.push("/profile")}
            />       
        </div>
    )
}

export default Navbar
