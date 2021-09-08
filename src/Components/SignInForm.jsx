import { useState, useEffect } from 'react';
import { loginUser } from '../actions';
import { useDispatch } from 'react-redux';

function SignInForm() {

    useEffect(() => {
      document.title = "Argent Bank - Sign In"
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nameInput, setNameInput] = useState([]);

    const dispatch = useDispatch();

    const handleUserNameChange = (event) => {
         setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        setNameInput([username, password]);
    };
    
    useEffect(() => {
        dispatch(loginUser(nameInput));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nameInput]); 

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            placeholder="User Name"
                            name="username"
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUserNameChange}
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
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
            </>
        )
}

export default SignInForm;