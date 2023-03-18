import React from 'react';
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import './index.css'
function ProfileComponent() {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/tuiter/edit-profile');
    };

    const handleBack = () => {
        navigate('/tuiter/home');
    };
    const profile = useSelector(state => state.profile)
    return (
        <div>
            <div>
                <button onClick={handleBack} className="float-left btn"><i className="float-left fa fa-arrow-left" ></i></button>
                <span className="mg-left mg-top-0"><b>{profile.firstName} {profile.lastName}</b></span>
            </div>
            <div className=" image-container">
                <img className="bg-img-profile" src={`/img/${profile.bannerPicture}`} alt="Profile" />
                <img className="circular-image" src={`/img/${profile.profilePicture}`} alt="Profile" />
                <button onClick={handleEdit} className="btn btn-light border-primary rounded-pill float-end"><b>Edit Profile</b></button>
            </div>

            <div className="mg-top">
                <h3><b>{profile.firstName} {profile.lastName}</b></h3>
                <p>{profile.handle}</p>
                <p>{profile.bio}</p>
                <a href={profile.website}>{profile.website}</a>
                <div>
                    <div>
                        <i className="fa-solid fa-location-dot"></i> {profile.location}
                        <i className="mg-left fa-sharp fa-solid fa-calendar"></i> Born {profile.dateOfBirth}
                        <i className="mg-left fa-sharp fa-solid fa-calendar"></i> {profile.dateJoined}
                    </div>
                    <br/>
                    <div>
                        <b>{profile.followingCount}</b> Following
                        <b className="mg-left">{profile.followersCount}</b> Followers

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
