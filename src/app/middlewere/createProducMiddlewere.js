const Accounts = require('../modles/accouts');


module.exports = function (req, res, next) {
    var email = req.body.email;
    Accounts.findOne({ email: email })
        .then(tk => {
            if (tk.email === 'addmin') {
                next()
            } else {
                return res.json({
                    message: 'tài khoản không có chứ năng này'
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
}