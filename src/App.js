
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./CSS/main.css";
import "./CSS/util.css";
//import './fonts';
import { Redirect, useNavigate} from 'react-router-dom';
import './javascript/main.js'
import emailjs from 'emailjs-com';
import ReactPlayer from 'react-player'


import React, { Component} from "react";

class App extends Component{
	
    constructor(props){
      super(props)
      this.state={
        name:'',
        email:'',
        isOpen:false
      }
      this.openModal = this.openModal.bind(this)
    }
    openModal () {
      this.setState({isOpen: true})
    }
    handleInputChange = (event) => {
     this.setState({
       name:event.target.value
     })
    };
    handleemailChange = (event) => {
      this.setState({
        email:event.target.value
      })
     };
	 saveFormData = async () => {
    const response = await fetch('/javascript/main.js', {
      method: 'GET',
      //body: JSON.stringify(values)
	  
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`); 
    }
  }
  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qp2c6sf', 'template_vi4e02q', e.target, 'HEwP9do8BlgSF0nzH')
      .then((result) => {
          console.log(result.text);
          console.log(e.target);
      }, (error) => {
          console.log(error.text);
      });
  };
  changeDisplay=(e)=>{
    setTimeout(() => {
      document.getElementById("ytplayer").style.display="block";
    }, 690);
    
  }
  onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await this.saveFormData();
	  
     
      this.sendEmail(event);
	  console.log(this.state.name+""+this.state.email);
    event.target.reset();
    this.changeDisplay();
    //this.openModal();
    //useNavigate("/homepage",{replace:true},this.state);
	  //alert('Your registration was successfully submitted!');
	
//   this.props.App(this.state).then(
//     () => {
//        this.context.router.push({
//           pathname: '/homepage',
//           state : {name: this.state.name,email:this.state.email}
//        })
//     },

//  )
	  
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  } 
  render(){
  return (
    <div className="App">
      <ReactPlayer
  url="https://www.youtube.com/watch?v=xvFZjo5PgG0"
  playing={true}
  muted={true}
  loop={true}
  controls={true}
  
  id="ytplayer"
/> 
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
          <span className="login100-form-title p-b-32" style={{color: "grey",font:"15px"}}>How accepting are people of those who are socially or politically different from themselves?<br/></span>
          
          <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.onSubmit.bind(this)} method='POST'>
              <span className="login100-form-title p-b-32">Sign Up</span>

              <span className="txt1 p-b-11">nickname</span>
              <div
                className="wrap-input100 validate-input m-b-36"
                data-validate="Username is required"
              >
                <input
				 className="input100"
				  type="text" 
				  name="name"
				  onChange={this.handleInputChange}
				   required/>
                <span className="focus-input100"></span>
              </div>

              <span className="txt1 p-b-11">email</span>
              <div
                className="wrap-input100 validate-input m-b-12"
                data-validate="Password is required"
              >
                {/* <span className="btn-show-pass">
							<i className="fa fa-eye"></i>
						</span> */}
                <input className="input100" type="email" name="email" onChange={this.handleemailChange} required />
                <span className="focus-input100"></span>
              </div>

              {/* <div className="flex-sb-m w-full p-b-48">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    I have read and understood the{" "}
                    <a href="#">terms and conditions</a>
                  </label>
                </div>

                
              </div> */}

              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit" id="submit">Enter</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
