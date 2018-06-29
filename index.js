var BulkEmailBot = require('bulkemailbot');

var userEmail = 'mv22228888@mail.ru',
    userPassword = 'karay1212',
    userService = 'Mail.ru', //see Nodemailer for other supported email services
    userName = 'Виктор Марчук',
    user = new BulkEmailBot(userName, userEmail, userService, userPassword);

var message = {
    subject: 'Hey',
    template: 'Hi $fName, thanks for the interview!'
}

user.bulkSend('./recipients.csv', message, function(err, data){
    if(err){
        console.log(err);
    } else {
        console.log('Message sent to ', data.envelope.to);
    }
});