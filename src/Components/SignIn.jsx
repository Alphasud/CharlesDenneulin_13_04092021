import { useEffect, useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { loginUser, reset } from '../actions';
import { useDispatch } from 'react-redux';


function SignIn() {

  const dispatch = useDispatch();

  const status = useSelector(state => state.loginReducer.status);
  const message = useSelector(state => state.loginReducer.message);  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   
  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(loginUser(username, password));
  };
    
  useEffect(() => {
    document.title = "Argent Bank - Sign In"
    dispatch(reset());
    }, [dispatch]); 
  
    return (
        <>
          <Nav />
            <main className="main bg-dark">
              <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            placeholder="User Name"
                            name="username"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
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
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
                <h3 className="error-login">{status !== 200 ? message : ''}</h3>
              </section>
            </main>
            <Footer />
    </>
    )
}

export default SignIn;