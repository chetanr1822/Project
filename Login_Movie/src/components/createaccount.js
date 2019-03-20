import React, {
  Component,
} from 'react';
import { Link, browserHistory } from 'react-router';

export class CreateAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passCode: '',
      name: '',
      contact: '',
      address: ''
    }
  }

  onClickCancel() {
    browserHistory.push('/');
  }

  onCreateAccount() {
    const { email, passCode, name, contact, address } = this.state;
    let loginInformation = JSON.parse(localStorage.getItem('loginInformation'));

    if (email === '' || passCode === '' || name === '' || contact === '' || address === '') {
      alert('All feilds are mandatory');
    } else if (loginInformation) {
      loginInformation.email.push(email);
      loginInformation.passCode.push(passCode);
      localStorage.setItem('loginInformation', JSON.stringify(loginInformation));
      browserHistory.push('/dashboardview');
    } else {
      let loginInfo = {
      	email: [],
      	passCode: []
      };
      loginInfo.email.push(email);
      loginInfo.passCode.push(passCode);
      localStorage.setItem('loginInformation', JSON.stringify(loginInfo));
      browserHistory.push('/dashboardview');
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
        var reg = /^[\w ]+$/;
      if( reg.test(event.target.value) ) {
         this.setState({passCode: event.target.value});
      } else {
         alert('Password must be alphanumeric');
      }
    } else if (event && event.target && event.target.name === 'name') {
      this.setState({name: event.target.value});
    } else if (event && event.target && event.target.name === 'contact') {
      if (/^\d{10}$/.test(event.target.value)) {
          this.setState({contact: event.target.value});
      } else {
          alert("Invalid number; must be ten digits");
      }
    } else if (event && event.target && event.target.name === 'address') {
      this.setState({address: event.target.value});
    }
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <div className="login100-form validate-form">
              <span className="login100-form-title p-b-33">
                CreateAccount
              </span>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="name" placeholder="Name" onBlur={(event) => this.onBlurEvent(event)}/>
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="email" placeholder="Email" onBlur={(event) => this.onBlurEvent(event)}/>
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="contact" placeholder="Contact Number" onBlur={(event) => this.onBlurEvent(event)}/>
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="address" placeholder="Address" onBlur={(event) => this.onBlurEvent(event)}/>
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="wrap-input100 rs1 validate-input">
                <input className="input100" type="password" name="passCode" placeholder="Password" onBlur={(event) => this.onBlurEvent(event)}/>
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="container-login100-form-btn m-t-20">
                <button className="login50-form-btn" onClick={() => this.onClickCancel() }>
                  Cancel
                </button>
                <button className="login50-form-btn m-l-75" onClick={() => this.onCreateAccount() }>
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
