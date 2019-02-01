import React, { Component } from "react";
//import Login from "../Login";
import "./Home.css";
import 'materialize-css/dist/css/materialize.min.css'
import MediaQuery from "react-responsive";
import M from 'materialize-css';



 class Home extends Component {
  componentDidMount() {
   M.AutoInit()    
    // console.log('I was triggered during componentDidMount')
    //var options = {}
    //var elems = document.querySelectorAll('.parallax');
    //var instances = M.Parallax.init(elems, options);
    
   
  }

   render() {
    console.log('Build not post build cccc')

    

        //  document.addEventListener('DOMContentLoaded', function() {
        //      var elems = document.querySelectorAll('.parallax');
        //      var instances = M.Parallax.init(elems);
        //  })
       
        return (
    
    

      <div>
      <MediaQuery minDeviceWidth={1224}>
      <div className="bg">
        <div className="row">
        
          <div id="para-height" className="parallax-container">
            <div className="parallax"><img className="para-img" src={process.env.PUBLIC_URL + "/assets/img/home/paralax1_c.jpg"}/></div>
          </div>
        </div>
        <div className="row ">
            <div className="section white section-white">
             
                <div className ="review col s8 offset-m2">
                  <div className="review__text">
                    <h3 className="heading-tertiary">Our Story</h3>
                      <p>The Lucky Starr in whole is over 600 acres of beautiful land, part mountainside and part farm land. We are nestled in the beautiful Sequatchie Valley between Dayton Mt. and the Cumberland Plateau. The Lucky Starr is in Bledsoe County Tennessee just 6 miles from the quaint town of Pikeville. and only 30 minutes to Fall Creek Falls State Park. 
                      The farm was established in 1992 by Starr & Parky LaFayette who have spent years clearing land and building their dreams. They have rented cabins on the property since 1993, now only the Big Cabin. The Event Venue was built in 2014 by Kellady & Mike Bledsoe (Starr’s daughter) and continues to grow as they live in the Small Cabin and run the venue.
                      
                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">      
 <div className="parallax-container">
          <div className="parallax"><img class="para-img" src={process.env.PUBLIC_URL + "/assets/img/home/paralax_2.jpg"}/></div>
        </div>
        </div>
            <div className="section white section-white">
              <div className="row ">
                <div className ="review col s8 offset-m2">
                  <div className="review__text">
                    <h3 className="heading-tertiary">Perfect for all occasions</h3>
                      <p>If you are looking for a romantic weekend getaway in a rustic cabin or a venue for a wedding, a party, a class reunion, church picnic or any other occasion… The Lucky Starr can fill your needs! Contact us for availability!</p>
                  </div>

            </div>                </div>
              </div>
     </div>

     </MediaQuery>


     <MediaQuery maxDeviceWidth={1224}>
     <div className="bg">
     <div className="row">
     
       <div id="para-height" className="parallax-container">
         <div className="parallax"><img class="para-img" src={process.env.PUBLIC_URL + "/assets/img/home/paralax1_c.jpg"}/></div>
       </div>
     </div>
     <div className="row ">
         <div className="section white section-white">
          
             <div className ="review col s10 offset-s1">
               <div className="review__text">
                 <h3 className="heading-tertiary">Our Story</h3>
                   <p>The Lucky Starr in whole is over 600 acres of beautiful land, part mountainside and part farm land. We are nestled in the beautiful Sequatchie Valley between Dayton Mt. and the Cumberland Plateau. The Lucky Starr is in Bledsoe County Tennessee just 6 miles from the quaint town of Pikeville. and only 30 minutes to Fall Creek Falls State Park. 
The farm was established in 1992 by Starr & Parky LaFayette who have spent years clearing land and building their dreams. They have rented cabins on the property since 1993, now only the Big Cabin. The Event Venue was built in 2014 by Kellady & Mike Bledsoe (Starr’s daughter) and continues to grow as they live in the Small Cabin and run the venue.

                   
                   </p>
               </div>
             </div>
           </div>
         </div>
         <div className="row">      
<div className="parallax-container">
       <div className="parallax"><img className="para-img" src={process.env.PUBLIC_URL + "/assets/img/home/paralax_2.jpg"}/></div>
     </div>
     </div>
         <div className="section white section-white">
           <div className="row ">
             <div className ="review col s10 offset-s1">
               <div className="review__text">
                 <h3 className="heading-tertiary">Perfect for all occasions</h3>
                   <p>If you are looking for a romantic weekend getaway in a rustic cabin or a venue for a wedding, a party, a class reunion, church picnic or any other occasion… The Lucky Starr can fill your needs! Contact us for availability!
                   </p>
               </div>
             </div>
           </div>
         </div>
  </div>

     </MediaQuery>

      </div>


     

  
        
    );
};
    };


export default Home;