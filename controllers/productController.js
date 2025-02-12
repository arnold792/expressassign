// Simulated product data store
let products = [];

// Get all products
exports.getProducts = (req, res) => {
    res.json(products);
};

// Get single product
exports.getProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
};

// Create product
exports.createProduct = (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };
    products.push(product);
    res.status(201).json(product);
};

// Update product
exports.updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    
    res.json(product);
};

// Delete product
exports.deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).json({ message: 'Product not found' });
    
    products.splice(productIndex, 1);
    res.status(204).send();
};
