import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Footer from './Footer';
import argentBankLogo from '../assets/img/argentBankLogo.png';
import { useSelector } from 'react-redux';

function UserProfile() {

    const firstName = useSelector(state => state.userReducer.firstName);
    const lastName = useSelector(state => state.userReducer.lastName);

     useEffect(() => {
      document.title = `Argent Bank - ${firstName} ${lastName}`
    }, [firstName, lastName]); 

    const handleClickEdit = (event) => {
        event.preventDefault();
        console.log('Click');
        /* history.push({
                pathname: `/user/${data.body.firstName}/edit`,
            
            }); */
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
                    <NavLink className="main-nav-item" to="/">
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
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
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