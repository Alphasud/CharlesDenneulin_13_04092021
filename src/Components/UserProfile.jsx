import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Footer from './Footer';
import argentBankLogo from '../assets/img/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import history from "../history";
import { logoutRequest } from '../actions';

function UserProfile() {

    const dispatch = useDispatch();

    const firstName = useSelector(state => state.userReducer.firstName);
    const lastName = useSelector(state => state.userReducer.lastName);

     useEffect(() => {
         document.title = `Argent Bank - ${firstName} ${lastName}`
     // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []); 

    const handleClickEdit = (event) => {
        event.preventDefault();
        history.push({
                pathname: `/edit-profile/${(firstName).toLowerCase()}`,
         });
    }

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
                    <NavLink className="main-nav-item" to="/">
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                    </NavLink>
                    <NavLink className="main-nav-item" to="/" onClick={handleLogOut}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                </div>
            </nav>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br /> {firstName} {lastName} !</h1>
                    <button className="edit-button" onClick={handleClickEdit}>Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">${new Intl.NumberFormat('en-EN').format((Math.random() * (10603 - 249) + 249).toFixed(2))}</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">${new Intl.NumberFormat('en-EN').format((Math.random() * (12698 - 1045) + 1045).toFixed(2))}</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">${new Intl.NumberFormat('en-EN').format((Math.random() * (603 - 24) + 24).toFixed(2))}</p>
                    <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
        
    )
}

export default UserProfile;