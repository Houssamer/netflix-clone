import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from './logo.png'
import avatar from './avatar.jpg'

function Navbar() {

    const [black, setBlack] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 100) {
                setBlack(true);
            } else {
                setBlack(false);
            }
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`navbar ${black && `navbar__black`}`}>
            <img src={logo} alt="netlix logo" className="navbar__logo"/>
            <img src={avatar} alt="" className="navbar__avatar"/>       
        </div>
    )
}

export default Navbar
