import React from 'react'
import { useSelector } from 'react-redux'
import { selectuser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import './ProfileScreen.css'

function ProfileScreen() {

    const user = useSelector(selectuser);


    return (
        <div className="profile">
            <Nav />
            <div className="profile_body">
               <h1>My Profile</h1>
               <div className="profile_info">
                   <img src="https://styles.redditmedia.com/t5_3udmqn/styles/profileIcon_snoo3c979fea-f83f-4432-94b9-92efee1af24d-headshot.png?width=256&height=256&crop=256:256,smart&s=0be0ca50e96f9d229dda92162944ba37c13cc26e" />
                   <div className="profile_details">
                      <h2>{user.email}</h2> 
                      <div className="profile_plans">
                          <h3>Plans</h3>
                          <button 
                          onClick={() => auth.signOut()}
                          className="profile_signout">Sign Out</button>
                      </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default ProfileScreen
