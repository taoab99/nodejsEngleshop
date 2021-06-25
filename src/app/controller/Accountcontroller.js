
const Accounts = require('../modles/accouts');

class Accountcontroller {
    create(req, res, next) {
        var email = req.body.email;
        var password = req.body.password;
        if (!email || !password) {
            return res.json('chưa có email or password');
        }
        try {
            // check email có trong db chưa
            Accounts.findOne({ email: email })
                .then(tk => {
                    if (tk) {
                        return res.json('tài khoản đã tồn tại')
                    }
                    else {
                        var Account = new Accounts({
                            email,
                            password
                        });
                        Account.save();
                        res.json('tạo tài khoản thành công');
                    }
                })
                .catch(next);
        } catch (error) {
            console.log()
        }

    }

    loggin(req, res, next) {
        var email = req.body.email;
        var password = req.body.password;
        if (!email || !password) {
            res.json({
                status: false,
                message: 'chưa có email or password'
            })
        }
        try {
            Accounts.findOne({ email: email })
                .then((tk) => {
                    if (tk) {
                        if (tk.password === password) {
                            return res.json({
                                status: true,
                                message: "đăng nhập thành công",
                                id: tk._id,
                                account: tk.email
                            });
                        }
                        return res.json({
                            status: false,
                            message: 'chưa đúng mật khẩu'
                        });

                    } else {
                        res.json({
                            status: false,
                            message: 'tài khoản không tồn tại '
                        })
                    }

                })
                .catch(next);
        } catch (error) {
            console.log(error);
        }

    }
    // thêm vào giỏ hàng trong tài khoản người dùng

    async addtocart(req, res, next) {
        const email = req.body.email;
        const acc = req.body.cart;
        var cart = await Accounts.findOne({ email: email });
        var pushcart = cart.cart;
        var checkItemCart = pushcart.filter((value) => {
            return value._id == acc._id;
        })
        if (checkItemCart.length != 0) {
            return res.json({
                message: 'bạn đã thêm vào giỏ trước đó'
            })
        }
        else {
            pushcart.push(acc);

            await Accounts.updateOne({ email: email }, { cart: pushcart })
                .then(data => {
                    res.json({
                        message: "thêm vào giỏ hàng thành công",
                        cart: pushcart

                    });
                })
                .catch(erro => {
                    console.log({
                        message: 'có lỗi xảy ra'
                    });
                })
        }
    }

    //  xóa sản phẩm khỏi giỏ hàng

    async deleteItemcart(req, res, next) {
        const email = req.body.email;
        const idItem = req.body.idItem;
        var cart = await Accounts.findOne({ email: email });
        var pushcart = cart.cart;
        var checkItemCart = pushcart.filter((value) => {
            return value._id != idItem;
        });

        await Accounts.updateOne({ email: email }, { cart: checkItemCart })
            .then(data => {
                res.json({
                    message: 'xóa thành công',
                    cart: checkItemCart
                });
            })
            .catch(erro => {
                console.log({
                    message: 'có lỗi xảy ra'
                });
            })
    }

    // lấy thông tin trong giỏ hàng của người dùng

    async getallcart(req, res, next) {
        const email = req.query.email;
        if (email) {
            try {
                await Accounts.findOne({ email: email })
                    .then(data => {
                        res.json({
                            cart: data.cart
                        })
                    })
                    .catch(next);
            } catch (error) {
                console.log('lỗi', error);
            }
        }
        return res.json({
            cart: []
        });
    }

}

module.exports = new Accountcontroller;