import React, { Component } from "react";
import API from "../../utils/API"
import './contact.css';
import MediaQuery from "react-responsive";
import MapIframe from '../../MAP/mapIframe';
//import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';
var validator = require('validator');
 





// document.addEventListener('DOMContentLoaded', function(stuff, instances) {
//   var options = {}; 
//   var elems = document.querySelectorAll('.modal ');
//   return stuff = 'stuff';
  // return instances = M.Modal.init(elems, options);
  
  
  


// });

class ContactForm extends Component  {
  constructor(props){
    super(props)
    this.clearForm = this.clearForm.bind(this)

    this.state = {
      first : "",
      last : "",
      email: "",
      message : "",
      
      isNotSelectedBool : true,
      selectValue : "",
      largeMap : {
        width : '800',
        height : '500'
  
      },
  
      smallMap : {
        width : '385',
        height : '300',
  
      }
     
   
    };

  }
   componentDidMount(instances, stuff) {
      M.AutoInit();
    
      // var elems = document.querySelectorAll('.collapsible');
      // var instances = M.Collapsible.init(elems);

      // var elem = document.querySelectorAll('.modal ');
      // var insstance = M.Modal.init(elem);
      // return instances = M.Modal.init(elems, options);
      //  var elem = document.querySelectorAll('.select-dropdown');
   
    //  var instance = M.FormSelect.getInstance(elem);

    //  document.addEventListener('DOMContentLoaded', function(instances) {
    //    var options = {}; 
    //    var elems = document.querySelectorAll('.modal');
    //    return instances = M.Modal.init(elems, options);
    // //  M.AutoInit();
    // });
  
  }

 


  // handleDropdownChange = event => {
  //   //const { name, value } = event.target;
  //   this.setState({
  //     selectValue : event.target.value
  //   });
  //   console.log(this.state)
  

  //   if (this.state.selectValue > 0) {
  //     this.setState({
  //       isNotSelectedBool : false
  //     });
  //    } else {
       
  //    }
  // }

  //  evaluateBool = () => {
    
  //    if (this.state.selectValue) {
  //      console.log('d')
       
  //      }
       
  //      else {
  //      console.log('f')
  //     }
  //  }

  // setBool = () => { if (this.state.selectValue) {
  //   console.log('removing attr')
  //   document.getElementsById("disabled").removeAttribute('disabled value');
  //   console.log('callbacl')
  //   console.log(this.state)
  //   this.setState({
  //     isNotSelectedBool : false
     
  //   });
   
  //  }
  // }
  
  handleInputChange = (event, setBool) => {
   
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => {
      if (this.state.selectValue) {
        // console.log('removing attr')
        // console.log('callback')

        // console.log(this.state)
        this.setState({
          isNotSelectedBool : false
         
        });
       
       }
    })
            
     }; 

   

     clearForm = (event) => { 
       console.log('cleared')
       this.setState(() => ({first : '', last: '', email : '' , message : '' , selectValue : ''}))

        
      }
     
  handleFormSubmit = (event) => {
      
    event.preventDefault();

    if (this.state.first &&  validator.isEmail( this.state.email) && this.state.message) {
     
      API.sendEmail({
        name: `${this.state.first} ${this.state.last}`,
        email: this.state.email,
        message: this.state.message,
        subject : this.state.selectValue
      })

    


       
        .catch(err => console.log(err));

        
    }

    else {
      event.preventDefault()
     
    }
  };


  OnSubmitButton = (event) => {
    this.handleFormSubmit(event)
      this.clearForm(event)
    
  }


  
//  isSelected = () => {
//    if (this.state.selectValue > 0) {
//     this.setState({
//       isNotSelectedBool : false
//     });
//    } else {
     
//    }
//  }
  


    render() {

      // console.log("form");
      // console.log(this.state);
    return (


      
<div>
<MediaQuery minDeviceWidth={1224}> 
<div className="row">
<div className="u-margin-bottom-medium"></div>
<div className="book">
                        <div className="book__form">

                        
                            <form  className="form">
                                <div className="u-margin-bottom-smedium">
                                    <h2 className="heading-secondary">
                                        Send us an Email !
                                    </h2>
                                </div>

                                <div className="form__group u-margin-bottom-medium">

                                 <h5 className ='inquiry_heading'> What are you inquiring about ? </h5>
                                
                                
                            </div>

                                  <div className ="input-field">
                                    <input  
                                    className="form__input validate" 
                                  
                                    id="first_name" 
                                    required="" 
                                    name="first" 
                                  
                                    value={this.state.first}
                                    onChange={this.handleInputChange}
                                    //id="first_name" 
                                    type="text" 
                                    



                                    />
                                    <label htmlFor="first_name" > First Name</label>
                                    </div>
                                   
                                

                                
                                <div className ="input-field">
                                    <input  
                                    className="form__input validate"  
                                    name="last" 
                                    value={this.state.last}
                                    onChange={this.handleInputChange}
                                    id="last_name" 
                                    type="text" 
                                    className="validate"/>
                                    <label htmlFor="last_name">Last Name</label>
                                    </div>
                                

                                <div className="form__group">
                                <div className ="input-field">
                                    <input 

                                    className="form__input validate"  
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    id="email" 
                                    type="email" 
                                    />
                                    <label htmlFor="email" >Email</label>
                                    

                                    </div>
                                </div>


                                <div className="form__group">
                                <div className ="input-field">
                                <textarea 
                                name="message" 
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                id="textarea1" 
                                className="form__input materialize-textarea">
                                </textarea>
                                <label htmlFor="textarea1">Textarea</label>
                                    </div>
                                </div>



                              

                            <div className="form__group">
                            <form className="choice-selection">
                                
                            <label>
                            <input 
                            type="radio"
                            //value={this.state.selectValue}  
                            onChange={this.handleInputChange} 
                            value="Rates"
                            name="selectValue"  />                                    
                             <span>Rates</span>
                            </label>
                          
                          
                            <label>
                            <input 
                            type="radio"
                            //value={this.state.selectValue} 
                            onChange={this.handleInputChange}
                            value="Events" 
                            name="selectValue"  
                             />
                              <span>Events</span>
                            </label>
                          
                          
                            <label>
                            <input 
                            type="radio"
                            //value={this.state.selectValue} 
                            onChange={this.handleInputChange} 
                            name="selectValue"  
                            value = "Hosting a Chartible Event"
                            />
                              <span>Charity</span>
                            </label>
                          
                          
                            <label>
                              <input 
                              type="radio"
                              //value={this.state.selectValue} 
                              onChange={this.handleInputChange} 
                               name="selectValue" 
                               value = "General Question"
                               />
                              <span>Other</span>
                            </label>
                          
                        </form>


                        <div className = 'button-container'>       
                                    {this.state.selectValue  && this.state.email ?
                                      <button 
                                      onClick ={this.OnSubmitButton}
                                      className="btn custom-btn" 
                                      //data-target="modal1" 
                                     // class="btn modal-trigger"
                                      >
                                     Submit </button>
                                    :
                                    'Please Fill out the entire form to Submit'
                                      }
                                      </div>
                                </div>
                            </form>
                        </div>
                        
                         </div>

                        
                         {
                           // FAQS if want to readd
                    //      <div className ="section-faq">
                    //       <h6 > Frequently Asked Question</h6>
                    //      <ul className="collapsible">
                    //      <li>
                    //        <div className="collapsible-header"><i>Q : </i>How do I ?</div>
                    //        <div className="collapsible-body"><span><i>A : </i>Lorem ipsum dolor sit amet.</span></div>
                    //      </li>
                    //      <li>
                    //         <div className="collapsible-header"><i>Q : </i>Where do I ?</div>
                    //        <div className="collapsible-body"><span><i>A : </i>Lorem ipsum dolor sit amet.</span></div>
                    //      </li>
                    //      <li>
                        
                    //        <div className="collapsible-header"> <i>Q : </i>How do I ?</div>
                    //        <div className="collapsible-body"><span> <i>A : </i>Lorem ipsum dolor sit amet.</span></div>
                    //      </li>
                    //    </ul>
                              
                    // </div>
                         }
                    


                  
      

      <div id="modal1" className="modal">
    <div className="modal-content">
      <h4 className ="modal-title"></h4>
      Thanks!
      <p className ="modal-text"></p>
      You Have Sucessfully Sent a Message
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Ok.</a>
    </div>
    
  </div>

                {  //  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6424214.836942619!2d-84.1311926038615!3d38.201092061236345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860b01c951121ab%3A0x1cc545136f9fda86!2sLucky+Starr+Event+Venue!5e0!3m2!1sen!2sus!4v1543375745517" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> 
    }

   
    <div className ="map-area">
    <MapIframe mapSize={this.state.largeMap}/>
   
     </div>
    

    </div>
   

    </MediaQuery>

    
    <MediaQuery maxDeviceWidth={1224}>
    
<div className="u-margin-bottom-medium"></div>
<div className = "row">
<div className= "col s12">
<div className="book">
                        <div className="book__form">

                        
                            <form action="#" className="form">
                                <div className="u-margin-bottom-smedium">
                                    <h2 className="heading-secondary">
                                        Send us an Email !
                                    </h2>
                                </div>

                                <div className="form__group u-margin-bottom-medium">

                                <div className=" u-margin-bottom-small">
                                 <h5 className ='inquiry_heading'> What are you inquiring about ? </h5>
                                </div>
                               
                            </div>

                                  

                                    <div className ="input-field">
                                    <input  
                                    className="form__input validate"  
                                    name="first" 
                                    value={this.state.first}
                                    onChange={this.handleInputChange}
                                    id="first_name" 
                                    type="text" 
                                    />
                                    <label htmlFor="first_name">First Name</label>
                                    </div>
                                   
                                

                                
                                <div className ="input-field">
                                    <input  
                                    className="form__input validate"  
                                    name="last" 
                                    value={this.state.last}
                                    onChange={this.handleInputChange}
                                    id="last_name" 
                                    type="text" 
                                    />
                                    <label htmlFor="last_name">Last Name</label>
                                    </div>
                                

                                <div className="form__group">
                                <div className ="input-field">
                                    <input 

                                    className="form__input validate"  
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    id="email" 
                                    type="email" 
                                    />
                                    <label htmlFor="email" >Email</label>
                                    

                                    </div>
                                </div>


                                <div className="form__group">
                                <div className ="input-field">
                                <textarea 
                                name="message" 
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                id="textarea1" 
                                className="form__input materialize-textarea">
                                </textarea>
                                <label htmlFor="textarea1">Textarea</label>
                                    </div>
                                </div>



                                <form>
                                
                                <label>
                                <input 
                                type="radio"
                                //value={this.state.selectValue}  
                                onChange={this.handleInputChange} 
                                value="Rates"
                                name="selectValue"  />                                    
                                 <span>Rates</span>
                                </label>
                              
                              
                                <label>
                                <input 
                                type="radio"
                                //value={this.state.selectValue} 
                                onChange={this.handleInputChange}
                                value="Events" 
                                name="selectValue"  
                                 />
                                  <span>Events</span>
                                </label>
                              
                              
                                <label>
                                <input 
                                type="radio"
                                //value={this.state.selectValue} 
                                onChange={this.handleInputChange} 
                                name="selectValue"  
                                value = "Hosting a Chartible Event"
                                />
                                  <span>Charity</span>
                                </label>
                              
                              
                                <label>
                                  <input 
                                  type="radio"
                                  //value={this.state.selectValue} 
                                  onChange={this.handleInputChange} 
                                   name="selectValue" 
                                   value = "General Question"
                                   />
                                  <span>Other</span>
                                </label>
                              
                            </form>

                            <div className="form__group">
                                    

                            <div className = 'button-container'>
                                    {this.state.selectValue  && this.state.email ?
                                 
                                    <button 
                                    onClick ={this.OnSubmitButton}

                                   className="btn custom-btn" 
                                    data-target="modal1" 
                                   
                                    >
                                   Submit </button>
                                  
                                  :
                                  'Please Fill out the entire form to Submit'

                                    }
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                        </div>
                         </div>
                

                   <div className = "row">
                   <div className = "col s12">
                   <div className ="map-area">

                   <MapIframe mapSize={this.state.smallMap}/>
                 
                   </div>
                   
                   
                   </div>
                   
                   </div>
                   
    </MediaQuery>



</div>

);
};
    };
 
 
 export default ContactForm;





// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });