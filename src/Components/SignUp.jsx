import Nav from './Nav';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUpUser, reset } from '../actions';

function SignUp() {

    const dispatch = useDispatch();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const status = useSelector(state => state.loginReducer.status);
    const message = useSelector(state => state.loginReducer.message);    
   
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signUpUser(email, password, firstName, lastName));
    };

    useEffect(() => {
    document.title = "Argent Bank - Sign Up"
    dispatch(reset());
    }, [dispatch]); 

    return (
    <>
            <Nav />
            <main className="main bg-dark">
              <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            placeholder="Email"
                            name="email"
                            type="mail"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="username">First Name</label>
                        <input
                            placeholder="First Name"
                            name="fistName"
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="username">Last Name</label>
                        <input
                            placeholder="Last Name"
                            name="lastName"
                            type="text"
                            id="LastName"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
        
                    <button className="sign-in-button" type="submit">Sign Up</button>
                </form>
                <h3 className="error-login">{status !== 200 ? message : ''}</h3>
              </section>
            </main>
            <Footer />
    </>
    )
}

export default SignUp;