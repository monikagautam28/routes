import React from "react";

import "./LoginPage.css";

const validUsers = [
  {
    email: "monika28may@gmail.com",
    password: "Mona1234",
    phoneNumber: 8307347557,
  },
  {
    email: "abc@gamil.com",
    password: "Monu1234",
    phoneNumber: 9416915114,
  },
  {
    email: "sanshu@gamil.com",
    password: "Sanshu12",
    phoneNumber: 7206303577,
  },
];

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorEmail: "",
      errorPassword: "",
      errorphoneNumber: "",
      phoneNumber: "",
      error: "",
   
    };
  }

 

  LoginWithRedirect = () => {
    let { email, password, phoneNumber } = this.state;

  

 
      (!email)? this.setState({ errorEmail: "Please enter email first" }): this.setState({ errorEmail: "" });
      (!password)? this.setState({ errorPassword: "Please enter password first" }): this.setState({ errorPassword: "" });
      (!phoneNumber)? this.setState({ errorphoneNumber: "Please enter phone number first" }): this.setState({ errorphoneNumber: "" });
    


    let checkEmail = validUsers.some((it) => it.email == email);
    let checkPassword = validUsers.some((it) => it.password == password);
    let checkPhoneNumber = validUsers.some((it) => it.phoneNumber == phoneNumber);
    if (checkEmail == true && checkPassword == true &&checkPhoneNumber == true)
     {
      let obj = { email: email, password: password, phoneNumber: phoneNumber };
      console.log(obj);
    
     
    if (checkEmail !== true) {
      this.setState({ errorEmail: "Email is not exist" });
    }
    if (checkPassword !== true) {
      this.setState({ errorPassword: "password is not exist" });
    }
    if (checkPhoneNumber !== true) {
      this.setState({ errorphoneNumber: "phone number is not exist" });
    }
  };
  
  if(email.length != 0 && password.length != 0 && phoneNumber.length != 0)
  {
   window.alert("Login Suceessfully done!!!!");
  }

  }



  handleChange(data) {

// let {email,password,phoneNumber} =this.state;
//     if(email== null|| password == null || phoneNumber == null)
//     {
//       this.setState({ errorEmail: "" });
//     }

   
  
    let { name, value } = data.target;


    this.setState({ [name]: value.trim(), error: "" });
    if(value.length == 0)
    {
      this.setState({errorEmail:""});
      this.setState({errorPassword:""});
      this.setState({errorphoneNumber:""});
    }
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
 
    const validPasswordRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/); 
   
  

switch(name) 
{



  case 'email':
    this.setState({errorEmail:validEmailRegex.test(value)
      ? ''
      : 'Email is not valid!'})
    
   
      
    break;
    case 'password': 
    this.state.errorPassword = 
    validPasswordRegex.test(value)
        ? ''
        : 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers';
    break;

    case 'phoneNumber':
      this.state.errorphoneNumber= value.length<10?"Phone Number must be 10 digit no!!":"";
    break;
    default:
      
      break;
}
}
    

  render() {
    return (
      < >
      <div className="fullPage">
        <div className="main">
          <p className="login">Login</p>
          <div className="outerBox">
            <label className="label"> Email</label>
            <div className="space">
              {" "}
              <input
                type="text"
                className="input"
                placeholder="enter your email"
                name="email"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
              ></input>
            </div>
            <span style={{ color: "red" }}>{this.state.errorEmail}</span>
          </div>
          <div className="outerBox"> 
            <label  className="label"> Password</label>
            <br></br>
            <div className="space">
              {" "}
              <input
                type="password"
                placeholder="enter your password"
                className="input"
                name="password"
                value={this.state.password} maxlength="8"
                onChange={(e) => this.handleChange(e)}
              ></input>
            </div>
            <span style={{ color: "red"}}>{this.state.errorPassword}</span>
          </div>
          <div className="outerBox">
            <label  className="label"> Contact Number</label>
            <br></br>
            <div className="space">
              {" "}
              <input
                type="text"
                className="input"
                placeholder="enter your contact number"
                name="phoneNumber" pattern="[0-9]"
                value={this.state.phoneNumber.replace(/[^0-9]/g, '')}   maxLength="10" 
                onChange={(e) => this.handleChange(e)}
              ></input>
            </div>
            <span style={{ color: "red" }}>{this.state.errorphoneNumber}</span>
          </div>
          <div>
            <button className="button" onClick={() => this.LoginWithRedirect()}>
              Login
            </button>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
