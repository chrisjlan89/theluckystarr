const router = require("express").Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

//const emailController = require("../controllers/emailController");

let BASEURL = "https://photoslibrary.googleapis.com/v1/albums";

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.user,
    pass: process.env.pass
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


// router.get('/api/photos', (req, res) =>{
//   return axios.get(`${BASEURL}`, {
      
//         headers: {
//            'Client-ID': 'response'
//          }
//        }).then( 
//          (response) => { console.log(response) },
//          (error) => { console.log(error) }
//        );;
     
// })

router.post('/api/send', (req, res) => {
  console.log('hit route insinde routes')
  console.log(req.body)
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    let inquiry = req.body.subject
    let subject = `${name}, inquiring about ${inquiry}`
    let body =  ` From ${name}, \n Asking about : ${inquiry}\n\n${message}` 
    var mail = {
      from: email,
      to: 'theluckystarrvenue@gmail.com',
              //Change to email address that you want to receive messages on
      subject: inquiry,
      text: body
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log('noooo')
        console.log(err)
        res.json({
          msg: 'fail'
        })
      } else {
        console.log('ssssss')
        res.json({
         
          msg: 'success'
        })
      }
    })
  })


module.exports = router;
//   router.route('/api/send')
// .post(emailController.sendEmail)