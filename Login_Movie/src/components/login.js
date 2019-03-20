import React, {
  Component,
} from 'react';
import { Link, browserHistory } from 'react-router';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passCode: ''
    }
  }

  onBlurEvent(event) {
    if (event && event.target && event.target.name === 'email') {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!reg.test(event.target.value)) {
          alert('Please enter valid Email Address');
      } else {
        this.setState({email: event.target.value});
      }
    } else if (event && event.target && event.target.name === 'passCode') {
      this.setState({passCode: event.target.value});
    }
  }

  onSignIn() {
    // let testData = {
    // 	email: ['abc@gmail.com','xyz'],
    // 	passCode: ['abc','xyz']
    // };
    //
    // localStorage.setItem('loginInformation', JSON.stringify(testData));
    const {email, passCode} = this.state;
    const loginInformation = JSON.parse(localStorage.getItem('loginInformation'));
    if(email === '' || passCode === '') {
      alert('Email and Password are mandatory fields');
    } else if (loginInformation) {
        if (loginInformation.email && loginInformation.email.includes(email) && loginInformation.passCode && loginInformation.passCode.includes(passCode) ) {
          browserHistory.push('/dashboardview');
        } else {
          alert('Incorrect Email/Password');
        }
    } else {
      alert('Please sign up');
    }
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <div className="login100-form validate-form">
              <span className="login100-form-title p-b-33">
                Account Login
              </span>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="email" placeholder="Email" onBlur={(event) => this.onBlurEvent(event)}/>
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="wrap-input100 rs1 validate-input">
                <input className="input100" type="password" name="passCode" placeholder="Password" onBlur={(event) => this.onBlurEvent(event)}/>
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="container-login100-form-btn m-t-20">
                <button className="login100-form-btn" onClick={() => this.onSignIn()}>
                  Sign in
                </button>
              </div>

              <div className="text-center">
                <span className="txt1">
                  Create an account?
                </span>
                <Link activeClassName="txt2 hov1" to="/createaccount">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
