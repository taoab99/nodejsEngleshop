const Billcart = require('../modles/billcart');

const Accounts = require('../modles/accouts');

class Billcartcontroller {
    index(req, res, next) {
        var email = req.body.email;
        var password = req.body.password;
        var cart = req.body.cart;

        Accounts.findOne({ email: email })
            .then(tk => {
                if (tk) {
                    if (tk.password === password) {
                        var Cart = new Billcart({
                            email: email,
                            cart: cart
                        });
                        Cart.save();
                        res.json("success");
                    }
                    res.json("mật khẩu sai")
                }
                res.json('lỗi');
            })
            .catch(next)
    }
}

module.exports = new Billcartcontroller;
