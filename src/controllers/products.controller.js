import Product from "./../models/Products";


export const createProduct = async (req, res) => {7

    const {name, category, price, image} = req.body;

    const newProduct = new Product({name, category, price, image})

    const productSaved = await newProduct.save();
    
    res.status(201).json(productSaved); // cdigo de estado 201 nuevo recurso creado
}



export const updateProduct = (req, res) => {

}

export const deleteProduct = (req, res) => {

}

export const getProducts = async (req, res) => {

    const products = await Product.find();

    res.status(200).json(products);
}

export const getProductsById = (req, res) => {

}