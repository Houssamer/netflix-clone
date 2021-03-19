import React from 'react'
import Navbar from '../Navbar'
import './ProfileScreen.css'
import avatar from '../avatar.jpg'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

function ProfileScreen() {

    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__content">
                    <img src={avatar} alt="" className="profileScreen__avatar"/>
                    <div className="profileScreen__info">
                        <div className="profileScreen__userInfo">
                            <h2>{user.email}</h2>
                            <p>Plans</p>
                        </div>
                        <div className="profileScreen__plans">


                            <button 
                                className="profileScreen__signOut"
                                onClick={() => auth.signOut()}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
