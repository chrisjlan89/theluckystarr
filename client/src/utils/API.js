import axios from "axios";

 
let BASEURL = "https://photoslibrary.googleapis.com/v1/albums";



  

 
 export default {

  search: function(accessTok) {
    console.log(accessTok)
    
    
    return axios.get(`${BASEURL}`, {
      
      headers: {
        'Client-ID': accessTok
      }
    }).then( 
      (response) => { console.log(response) },
      (error) => { console.log(error) }
    );;
  },


  
  // search: function(accessTok) {
  //   console.log(accessTok)
  //   return axios.get('/api/photos', accessTok)
  // },


  sendEmail: function(emailData) {
    console.log(emailData, 'email data')
   return axios.post('/api/send', emailData)
  // }).then( 
  //     (response) => { console.log(response) },
  //     (error) => { console.log(error) }
  //   );;
  }


}



  