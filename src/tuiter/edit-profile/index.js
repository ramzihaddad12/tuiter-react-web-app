import {useSelector} from "react-redux";
import '../profile/index.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editProfile} from "../reducers/profile-reducer";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector(state => state.profile)

    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/tuiter/profile');
    };


    const [formData, setFormData] = useState(profile);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(editProfile(formData));
        navigate('/tuiter/profile');
    };
    return (
        <div>
            <div>
                <button onClick={handleExit} className="float-left btn"><i className="fas fa-times"></i></button>

                {/*<span className="mg-left"><b className="display-6">Edit Profile</b></span>*/}
                <span className="mg-left mg-top-0"><b>Edit Profile</b></span>
                <button onClick={handleSubmit} className="float-right btn btn-dark border-primary rounded-pill float-end"><b>Save</b></button>

            </div>
            <div className=" image-container">
                <img className="bg-img-profile" src={`/img/${profile.bannerPicture}`} alt="Profile" />
                <img className="circular-image" src={`/img/${profile.profilePicture}`} alt="Profile" />
            </div>

            <div className="form-group mg-top full-width">

                <label htmlFor="firstName">First Name:</label>
                <input className="full-width" type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}   id="firstName" />
                <br/><br/>

                <label htmlFor="lastName">Last Name:</label>
                <input className="full-width" type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}   id="lastName" />
                <br/><br/>

                <label htmlFor="bio">Bio:</label>
                <textarea className="full-width" value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} id="bio"  name="bio"></textarea>
                <br/><br/>

                <label htmlFor="location">Location:</label>
                <input className="full-width" type="text" onChange={(e) => setFormData({ ...formData, location: e.target.value })} id="location" value={formData.location} name="location"/>
                <br/><br/>

                <label htmlFor="website">Website:</label>
                <input className="full-width" type="url" onChange={(e) => setFormData({ ...formData, website: e.target.value })} value={formData.website} id="website" name="website"/>
                <br/><br/>

                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input className="full-width" type="date" onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}value={formData.dateOfBirth} id="dateOfBirth" name="dateOfBirth"/>
                <br/><br/>
            </div>
        </div>


    ); }

export default EditProfile;
