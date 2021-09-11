import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { modifyName } from "../actions";
import Nav from './Nav';
import Footer from './Footer';


function EditProfile() {

    const dispatch = useDispatch();

    const token = useSelector(state => state.loginReducer.token);
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
   
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(modifyName(token, newFirstName, newLastName))  
    }

    return (
        <>
            <Nav />
            <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-edit sign-in-icon"></i>
                <h1>Edit Your Personal Infos</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">First Name</label>
                        <input
                            placeholder="First Name"
                            name="firstName"
                            type="text"
                            id="firstName"
                            value={newFirstName}
                            onChange={(event) => setNewFirstName(event.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            placeholder="Last Name"
                            name="lastName"
                            type="text"
                            id="lastName"
                            value={newLastName}
                            onChange={(event) => setNewLastName(event.target.value)}
                        />
                    </div>
                    <button className="sign-in-button" type="submit">Edit</button>
                </form>
                </section>
            </main>
            <Footer />
            </>
        )
}

export default EditProfile;