const model = require("../models/productModel");

const getProduct = async (req, res) => {
  try {
    const products = await model.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await model.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (req, res) => {
  try {
    await model.create(req.body);
    res.status(200).json({ msg: "Product Created" });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
    try {
        await model.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({ msg: 'Product Updated' })
    } catch (error) {
        console.log(error)
    }
}

const deleteProduct = async (req,res) => {
    try {
        await model.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({ msg: 'Product Deleted' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
  getProduct,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct
};
