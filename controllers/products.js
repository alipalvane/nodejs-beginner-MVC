const products = []

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
  });
};

exports.postAddProduct = (req, res) => {
  const { title } = req.body;
  products.push({ title });
  res.redirect('/')
};

exports.getAddProductList = (req,res)=>{
  res.render('shop',{
    pageTitle: "Shop Page",
    products : products
  })
}

