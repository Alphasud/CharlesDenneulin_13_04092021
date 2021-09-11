import argentBankLogo from "../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequest } from '../actions';

function Nav() {

    const dispatch = useDispatch();

    const status = useSelector(state => state.userReducer.status);
    const user = useSelector(state => state.userReducer.firstName);

    const handleLogOut = () => {
        dispatch(logoutRequest());   
    }
       
    return (
    <>
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink className="main-nav-item" to={status === 200 ? `/user/${user}` : '/sign-in'}>
                    <i className="fa fa-user-circle"></i>
                    {status === 200 ? user : 'Sign In'}
                </NavLink>
                {status === 200 ? <NavLink className="main-nav-item" to="/" onClick={handleLogOut}>
                                    <i className="fa fa-sign-out"></i>
                                    Sign Out
                </NavLink> : ''}
                {status !== 200 ? <NavLink className="main-nav-item" to="/sign-up">
                                    <i className="fa fa-sign-in"></i>
                                    Sign Up
                </NavLink> : ''}
                
            </div>
        </nav>
    </>
    
    )
}

export default Nav;