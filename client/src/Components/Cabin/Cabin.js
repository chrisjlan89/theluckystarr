import React, { Component } from "react";
import API from "../../utils/API";
import  GoogleLogin  from 'react-google-login';
import {AUTH_CONFIG} from '../../Auth/authVars';
import MediaQuery from "react-responsive";
// import Auth from '../../Auth/auth';
import  Gallery  from 'react-grid-gallery';
//import * as otherGallery  from 'react-photo-gallery' ;
import './Cabin.css'
import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css';




	
	// img class
	// function image(src, thumbnail, thumbnailWidth, thumbnailHeight, caption, arr) {
	// 	this.src = src;
		
	// 	this.thumbnail = thumbnail;
	// 	this.thumbnailWidth = thumbnailWidth;
	// 	this.thumbnailHeight = thumbnailHeight;
	// 	this.caption = caption;
	// 	// place img obj in imgs arr when obj gets created
	// 	IMAGES.push(this);
	// }

	//  create our imgs
  // image1 = new image (process.env.PUBLIC_URL + "/assets/paralax_1.jpg", process.env.PUBLIC_URL + "/assets/paralax_1.jpg", 144, 
  // 174,'flavatown',  IMAGES);

	// image2 = new image (process.env.PUBLIC_URL + "/assets/paralax_2.jpg", process.env.PUBLIC_URL + "/assets/paralax_2.jpg", 144, 
  // 174,'flavatown',  IMAGES);

	// image3 = new image (process.env.PUBLIC_URL + "/assets/paralax_1.jpg", process.env.PUBLIC_URL + "/assets/paralax_1.jpg", 144, 
  // 174,'flavatown',  IMAGES);


	// image4 = new image (process.env.PUBLIC_URL + "/assets/paralax_1.jpg", process.env.PUBLIC_URL + "/assets/paralax_1.jpg", 144, 
  // 174,'flavatown',  IMAGES);






 const IMAGES = [
  {
    
    src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin1.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin1.jpg",
    className: "materialboxed",
    isSelected : false,
    thumbnailWidth: 144,
        thumbnailHeight: 174,
       
        caption: "The Big Cabin "
  },
  {
  
   src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin2.jpg",
   thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin2.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
     
        caption: "Back porch for upstairs unit"
  },
  {
   
   src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin3.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin3.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
     
        caption: "Upstairs, front porch with swing, BBQ and amazing view!"
  },
  {
    src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin4.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin4.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
       
        caption: "Upstairs and Downstairs units are separate. Both have small front porches."
  },
   



  {
    src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin5.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin5.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
      
        caption: "Upstairs, large hand-made cedar table built in to eat or play games."

   
  },
  
  {
    src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin6a.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin6a.jpg",
     className: "materialboxed",
     thumbnailWidth: 320,
         thumbnailHeight: 174,
        
         caption: ""
 
   },
  
  {
   src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin6.jpg",
   thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin6.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
       
        caption: "Cozy living room with a wood burning stove, fire wood is provided. Don't worry there is an electric wall unit for heat and air and also a propane heat unit! The sofa makes a pull out double bed. The TV's do not have cable or satellite, but a DVD and VHS player are provided in both units. Bring your own movies to watch!"

  },
  
  {
   src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin7.jpg",
   thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin7.jpg",
   className: "materialboxed",
   thumbnailWidth: 320,
       thumbnailHeight: 174,
      
       caption: "Queen size bed in upstairs unit. Linens are provided."

 },

 {
  src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin8.jpg",
  thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin8.jpg",
  className: "object-fit-util",
  thumbnailWidth: 320,
      thumbnailHeight: 174,
     
      caption: "One full bath with a shower."

},


{
  src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin10a.jpg",
  thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin10a.jpg",
  
  className: "object-fit-util",
  thumbnailWidth: 320,
      thumbnailHeight: 174,
     
      caption: ""

},



{
  src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin10.jpg",
  thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin10.jpg",
  
  className: "object-fit-util",
  thumbnailWidth: 320,
      thumbnailHeight: 174,
     
      caption: "Second bedroom has bunk beds with a single on top and a double on bottom."

},

{
  src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin11.jpg",
  thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin11.jpg",
  
  className: "object-fit-util",
  thumbnailWidth: 320,
      thumbnailHeight: 174,
     
      caption: "Downstairs living room with gas heater and electric wall air unit plus electric space heaters.  "

},

{
  src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin12.jpg",
  thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin12.jpg",
  
  className: "object-fit-util",
  thumbnailWidth: 144,
      thumbnailHeight: 174,
     
      caption: "Full bath with shower, towels provided."

},

{
  src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin13.jpg",
  thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin13.jpg",
  
  className: "object-fit-util",
  thumbnailWidth: 320,
      thumbnailHeight: 174,
     
      caption: "Full kitchen with: refrigerator, gas stove, coffee pot, microwave, pots & pans, dishes and silverware. Table seats 4-6"

},

{
  src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin14.jpg",
  thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin14.jpg",
  
  className: "object-fit-util",
  thumbnailWidth: 320,
      thumbnailHeight: 174,
     
      caption: ""

},

{
  src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin15.jpg",
  thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin15.jpg",
  
  className: "object-fit-util",
  thumbnailWidth: 1050,
      thumbnailHeight: 900,
     
      caption: "The beautiful view overlooking Echo Lake."

}






 ];
 




 class Cabin extends Component {
  componentDidMount() {
    
    //console.log('I was triggered during componentDidMount')
   
//var instances = M.Materialbox.init(elems, options);

    M.AutoInit();
    
  }




  state = {
   
};
  
 

   ael = event => {
   // instances.open();

    // document.addEventListener('DOMContentLoaded', function() {
    //    var elems = document.querySelectorAll('.materialboxed');
    //    var instances = M.Materialbox.init(elems, options);
    //  });

    console.log('sssss')
  

   }

  // hfs = event => {
  //   event.preventDefault();
   
  //     API.search({
  //       token : console.log(responseGoogle)
  //     })
  //       //.then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   };
 // ComponentDidMount() {
  // document.addEventListener('DOMContentLoaded', function() {
    //    var elems = document.querySelectorAll('.materialboxed');
    //    var instances = M.Materialbox.init(elems, options);
    //  });

   // console.log('comp did mount')
 // }

 


   render(some) {
     
    const responseGoogle = (response) => {
      console.log(`full responnse`)
      console.log(response)
      console.log(response.tokenObj.access_token);

      API.search({
        token : response.tokenObj.access_token
      })
     

    }
    
   
     
    
     return (

    
  <div>

  <MediaQuery minDeviceWidth={1224}>
     
    <div className="row">
    </div> 
    <div className="row">
    </div> 
 
    <div className = "row">
      <div className="col s6 offset-s3">
        <h2 className="main-title centered"> Rediscover Nature </h2>
        <h3 className="sub-title centered">  Relax in our beautiful and rustic Cabin</h3>
      </div>
      <div className="col s8 offset-s2">
        <h5 className= "main-desc">Overlooking Echo lake, with abundant wildlife surrounding you, enjoy the peace and quiet of our cozy
cabin in the woods any time of year! Unplug and unwind while you sit and read a book, watch the
wildlife while swinging on the front porch.  Grab your pole and fish in our well stocked  lake. Our
cabin is a great place for a romantic weekend or to spend quality time with your whole family!
        </h5>
      </div>
  
    </div>
  
   

      <div className="gal-con">
        <div className = "row">
        <div className="col s8 offset-s2">
          <Gallery images={IMAGES} />
          { // <GridGallery images={IMAGES}/> 
     }
          </div>
      
        </div>
      </div>

     
      <div className = "row"> 
      <div className="detail">
      <div className=" col s6">
      <div className="description">
          <p className="paragraph">
          The Big Cabin has two separate units. Each unit has its own bathroom and kitchen. Downstairs has 2 bedrooms and can sleep 5. 
          The upstairs can sleep 10 and has 1 bedroom with a queen bed, a cozy loft that can sleep 6, and a pull out sofa in the living room. 
         
          </p>
          <p className="paragraph">
          The cabin can be rented as a whole or each unit separately.
          Available for rent anytime of year call  Starr at 423-533-2100 for more information. 
          A small security deposit is required. Pets are allowed for an additional fee. Sorry, at this time we cannot take credit cards.
          </p>
          <ul className="list">
              <li className="list__item">Downstairs unit rents for $100 for 2 guests per night</li>
              <li className="list__item">Upstairs unit rents for $125 per night</li>
              <li className="list__item">Each rental includes $25 Cleaning fee</li>
             
              <li className="list__item">Air conditioning and heating</li>
              <li className="list__item">Pets allowed with $40 fee</li>
           
              <li className="list__item">Perfect for families</li>
          </ul>
          <div className="recommend">
              <p className="recommend__count">
                 Note : Cabin is not included in the base price of weddings or events
               
                 
              </p>
              
          </div>
          </div>
      </div>
      <div className = "col s4">
       
      <figure className="user-reviews">
          <figure className="venue-review">
              <blockquote className="venue-review__text">
              What a beautiful great location and a Gem of a find! The owners are amazing, friendly, 
              and so accommodating to everything that you might need. 
              My family had such as awesome experience spending the day at this location. 
              Well Done Lucky Starr!! Thanks a bunch for wonderful time 
              </blockquote>
              <figcaption className="venue-review__user">
                  <img src={process.env.PUBLIC_URL + "/assets/img/cabin/review/review_christy.jpg"} alt="User 1" className="venue-review__photo" />
                  <div className="venue-review__user-box">
                      <p className="venue-review__user-name">Christy McDaniel</p>
                      <p className="venue-review__user-date">August 22nd, 2017</p>
                  </div>
                  <div className="venue-review__rating">
                  <i className="fas fa-star"> </i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  
                  </div>
              </figcaption>
          </figure>

          <figure className="venue-review">
              <blockquote className="venue-review__text">
                Great time camping and viewing the 2017 eclipse! Also got to catch up with old friends and make new ones. We shall return!
              </blockquote>
              <figcaption className="venue-review__user">
                  <img src={process.env.PUBLIC_URL + "/assets/img/cabin/review/review_brandon.jpeg"} alt="User 1" className="venue-review__photo" />
                  <div className="venue-review__user-box">
                      <p className="venue-review__user-name">Brandon Lacy</p>
                      <p className="venue-review__user-date">August 21th, 2017</p>
                  </div>
                  <div className="venue-review__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  </div>
              </figcaption>
          </figure>
          

        
          
      </figure>
      </div>
      </div>
      </div>
      </MediaQuery>

      
      {
      //   <MediaQuery maxWidth={1224}>
      //   <div>You are sized like a tablet or mobile phone though</div>
      // </MediaQuery>
      }
   
    <MediaQuery maxDeviceWidth={1224} >

   <div className = "bg">
    <div className = "row">
    <div className="col s12 ">
      <h2 className=""> Rediscover Nature</h2> 
     
    </div>
  </div>


  
  <div className = "row">
    <div className="col s12 ">
    <div className='cabin-desc'>
      <h5>Overlooking Echo lake, with abundant wildlife surrounding you, enjoy the peace and quiet of our cozy
cabin in the woods any time of year! Unplug and unwind while you sit and read a book, watch the
wildlife while swinging on the front porch, or grab your pole and fish in our well stocked lake. Our
cabin is a great place for a romantic weekend or to spend quality time with your loved ones!
      </h5>
      </div>
    </div>
    </div>

  

  <div className="gal-con">
  <div className = "row">
    <div className="col s12">
    <Gallery images={IMAGES} />
    { // <GridGallery images={IMAGES}/> 
}
    </div>

  </div>
</div>

  
  <div className="detail">
  <div className = "row">
  <div className=" col s12">
  <div className="description">
      <p className="paragraph">
      The Big Cabin has two separate units. 
      Each unit has its own bathroom and kitchen. 
      Downstairs has 2 bedrooms and can sleep 5. 
      The upstairs can sleep 10 and has 1 bedroom with a queen bed, 
      a cozy loft that can sleep 6, and a pull out sofa in the living room.

      
      </p>
      <p className="paragraph">
      The cabin can be rented as a whole or each unit separately. 
       Available for rent anytime of year call  Starr at 423-533-2100 for more information
      A small security deposit is required. 
      Pets are allowed for an additional fee. 
      Sorry, at this time we cannot take credit cards.
      </p>
      <ul className="list">
          
          <li className="list__item">Upstairs unit rents for $125 for 2 guest</li>
          <li className="list__item">Downstairs unit rents for $100 for 2 guests per night</li>
          <li className="list__item">Each rental includes $25 Cleaning fee</li>
          <li className="list__item">Each additional guest is $15 per night</li>
          <li className="list__item">Pets allowed for one time $40 fee</li>
          <li className="list__item">Air conditioning and heating</li>
          <li className="list__item">Perfect for families</li>
      </ul>
      <div className="recommend">
          <p className="recommend__count">
             Note : Cabin is not included in the base price of weddings or events
            
          </p>
          
      </div>
      </div>
  </div>
  </div>
  </div>

<div className="row">
<div className="col s10 offset-s1">
  <figure className="user-reviews">

          <figure className="venue-review">
              <blockquote className="venue-review__text">
              What a beautiful great location and a Gem of a find! The owners are amazing, friendly, 
              and so accommodating to everything that you might need. 
              My family had such as awesome experience spending the day at this location. 
              Well Done Lucky Starr!! Thanks a bunch for wonderful time 
              </blockquote>
              <figcaption className="venue-review__user">
                  <img src={process.env.PUBLIC_URL + "/assets/img/cabin/review/review_christy.jpg"} alt="User 1" className="venue-review__photo" />
                  <div className="venue-review__user-box">
                      <p className="venue-review__user-name">Christy McDaniel</p>
                      <p className="venue-review__user-date">August 22nd, 2017</p>
                  </div>
                  <div className="venue-review__rating">
                  <i className="fas fa-star"> </i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  
                  </div>
              </figcaption>
          </figure>

          <figure className="venue-review">
          <blockquote className="venue-review__text">
            Great time camping and viewing the 2017 eclipse! Also got to catch up with old friends and make new ones. We shall return!
          </blockquote>
          <figcaption className="venue-review__user">
              <img src={process.env.PUBLIC_URL + "/assets/img/cabin/review/review_brandon.jpeg"} alt="User 1" className="venue-review__photo" />
              <div className="venue-review__user-box">
                  <p className="venue-review__user-name">Brandon Lacy</p>
                  <p className="venue-review__user-date">August 21th, 2017</p>
              </div>
              <div className="venue-review__rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              </div>
          </figcaption>
      </figure>
  </figure>
  </div>
  </div>
  </div>
    </MediaQuery>
    

     
     { // <GoogleLogin 
      // clientId={AUTH_CONFIG.client_id}
      // buttonText="Login"
      // onSuccess={responseGoogle}
      // onFailure={responseGoogle}
      //  />
     }
</div>
       
    
     );
   };
 }


//  <div className ="row">
//       <div className ="gal-box">  
//      <div className="col s3 col m3 offset-s1 offset-m1">
//      <img className="materialboxed photo-1"  src={process.env.PUBLIC_URL + "/assets/paralax_2.jpg"}/>
//      </div>
//      <div className="col s3 col m3 ">
//      <img className="materialboxed photo-1 mar"  src={process.env.PUBLIC_URL + "/assets/paralax_2.jpg"}/>
//      </div>
//      <div className="col s3 col m3 ">
//      <img className="materialboxed photo-1 mar"  src={process.env.PUBLIC_URL + "/assets/paralax_2.jpg"}/>
//      </div>
//      </div>
//      </div>


// const Gallery =(props) => {
//     return (


//   <div>
//     This is the Gallery Page
//   </div>

// );
// };


export default Cabin;