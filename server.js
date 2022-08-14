const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: "outlook",
    auth: {
        user: "jackyoukstetter-goodmorning@outlook.com",
        pass: "JackJack5000",
    },
});
const options = {
    from: "jackyoukstetter-goodmorning@outlook.com",
    to: "jackyoukstetter1@gmail.com",
    subject: "testin emailbot",
    text: "yo it worked lol goodmornin"
};

transporter.sendMail(options, (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(data);
});