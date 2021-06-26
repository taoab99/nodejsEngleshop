const port = process.env.PORT || 4000;
const Products = require('../modles/products');
const cloundinary = require('../middlewere/cloundinary');

class Productscontroller {
    index(req, res, next) {

        Products.find({})
            .then(products => {
                res.json(products)
            })
            .catch(next);
    }

    id(req, res, next) {
        Products.findById(req.params.id)
            .then(products => {
                res.json(products);
            })
            .catch(next);
    }

    async createProduct(req, res, next) {
        var name = req.body.name;
        var description = req.body.description;
        var category = req.body.category;
        var price = req.body.price;
        var sale = req.body.sale;
        if (name === '' || description === '') {
            return res.json({
                message: 'chưa nhập tên hoặc mô tả cho sản phẩm'
            })
        } else {
            var ProductsAdd = new Products({
                name: name,
                description: description,
                category: category,
                price: price,
                sale: sale
            });
            if (req.file) {
                var path = req.file.path;
                var image_clound = await cloundinary.uploader.upload(path)
                ProductsAdd.url = image_clound.secure_url;
            }
            ProductsAdd.save()
                .then(
                    products => {
                        res.json({
                            message: "thêm sản phẩm thành công"
                        });
                    }
                )
                .catch(error => {
                    res.json({
                        message: 'lỗi error' + error
                    })
                })
        }

    }

    async paginate(req, res, next) {
        var page = req.query.page ? req.query.page : 1;
        var limit = req.query.limit ? req.query.limit : 4;
        var start = (page - 1) * limit;
        var end = page * limit;


        var x = await Products.find({});
        var y = x.slice(start, end);
        res.json(y)
    }

    async getproducbycategry(req, res, next) {
        var name = req.query.name;
        await Products.find({ category: name })
            .then(products => {
                res.json({
                    products: products
                })
            })
            .catch(next);
    }

}

module.exports = new Productscontroller;