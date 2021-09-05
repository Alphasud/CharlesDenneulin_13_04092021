import { useEffect } from 'react';
import SignInForm from './SignInForm';
import Footer from './Footer';
import Nav from './Nav';

function SignIn() {

  useEffect(() => {
      document.title = "Argent Bank - Sign In"
  }, []);
  
    return (
        <>
          <Nav />
            <main className="main bg-dark">
              <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <SignInForm />
              </section>
            </main>
            <Footer />
    </>
    )
}

export default SignIn;