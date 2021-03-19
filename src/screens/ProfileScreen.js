import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import './ProfileScreen.css'
import avatar from '../avatar.jpg'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth, db } from '../firebase'

function ProfileScreen() {

    const [currentPlan, setCurrentPlan] = useState('');
    const [standard, setStandard] = useState(false);
    const [basic, setBasic] = useState(false);
    const [premuim, setPremuim] = useState(false);
    const [currentUser, setCurrentUser] = useState([])
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('plans').doc(user.email).get()
        .then(doc => setCurrentUser(doc.data()))
        
        switch (currentUser.plan) {
            case 'standard':
                setStandard(true);
                setBasic(false);
                setPremuim(false);
                setCurrentPlan(`current plan : Standard Plan`);
                break;
            case 'basic':
                setBasic(true);
                setStandard(false);
                setPremuim(false);
                setCurrentPlan('current plan : Basic Plan');
                break;
            case 'premuim':
                setPremuim(true);
                setBasic(false);
                setStandard(false);
                setCurrentPlan('current plan : Premuim Plan');
                break;
            default:
                break;
        }
    }, [user, currentUser])

    function Standard() {
        !standard ? setCurrentPlan(`current plan : Standard Plan`) : setCurrentPlan('');
        setBasic(false);
        setPremuim(false);
        !standard ? setStandard(true) : setStandard(false);

        db.collection('plans').doc(user.email).set({
            plan: !standard ? 'standard' : ''
        }, {merge: true});
    }

    function Basic() {
        !basic ? setCurrentPlan('current plan : Basic Plan') : setCurrentPlan('');
        !basic ? setBasic(true) : setBasic(false);
        setPremuim(false);
        setStandard(false);
        db.collection('plans').doc(user.email).set({
            plan: !basic ? 'basic' : ''
        }, {merge: true});
    }

    function Premuim() {
        !premuim ? setCurrentPlan('current plan : Premuim Plan') : setCurrentPlan('');
        setBasic(false);
        !premuim ? setPremuim(true) : setPremuim(false);
        setStandard(false);
        db.collection('plans').doc(user.email).set({
            plan: !premuim ? 'premuim' : ''
        }, {merge: true});
    }
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
                            <p>Plans ({currentPlan})</p>
                        </div>
                        <div className="profileScreen__plans">
                            <div className="netflixPlan" onClick={Standard}>
                                <h4>netflix Standard Plan</h4>
                                <button className={`netflixPlan__button ${standard && 'clicked'}`}>{!standard ? 'Subscribe' : 'Unsubscribe'}</button>
                            </div>
                            <div className="netflixPlan" onClick={Basic}>
                                <h4>netflix Basic Plan</h4>
                                <button className={`netflixPlan__button ${basic && 'clicked'}`}>{!basic ? 'Subscribe' : 'Unsubscribe'}</button>
                            </div>
                            <div className="netflixPlan" onClick={Premuim}>
                                <h4>netflix Premuim Plan</h4>
                                <button className={`netflixPlan__button ${premuim && 'clicked'}`}>{!premuim ? 'Subscribe' : 'Unsubscribe'}</button>
                            </div>
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
