const Accounts = require('../modles/accouts');

module.exports = function logginMiddlewere(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    Accounts.findOne({ email: email })
        .then((tk) => {
            if (tk) {
                if (tk.password === password) {
                    res.cookie('userloggin', tk.id, [{
                        signed: true
                    }])
                    res.json('success loggin');
                }
                res.json('chưa đúng mật khẩu');
                return;
            } else {
                res.json('tài khoản không tồn tại ')
            }

        })
        .catch(err => {
            console.log(err)
        });
    next();
}