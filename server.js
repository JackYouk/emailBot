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
    to: "carlanb@gmail.com",
    subject: "Goodmorning!",
    text: "Hey Grandma carlan, wishing you a great morning! -Jack's email robot"
};

function runEveryDay(){
    setInterval(() => {
        transporter.sendMail(options, (err, data) => {
            if(err){
                console.error(err);
            }
            console.log(data);
        });
        // 24 hours in milliseconds
    }, 86400000);
}

runEveryDay();