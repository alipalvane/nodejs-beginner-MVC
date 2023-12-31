const Product = require("../models/product");
exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getAddProductList = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      pageTitle: 'Shop Page',
      products: products,
    })
  })
}