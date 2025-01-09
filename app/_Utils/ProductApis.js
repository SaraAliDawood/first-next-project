const { default: axiosClient } = require('./axiosClient');

// Fetch all products
const getLatestProducts = () => axiosClient.get('/products?populate=*');
const getProductsByCategory = (category)=>axiosClient.get(`/products?populate=*&filters[category][$eq]=${category}`);
// Fetch product by ID using frontend filtering
const getProductById = async (id) => {
  try {
    // Fetch all products
    const response = await getLatestProducts();
    const products = response.data?.data || [];
    // Find the product with the matching ID
    const product = products.find((item) => item.id === id);

    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }

    return product;
  } catch (error) {
    console.error('Error fetching product by ID:', error.message);
    throw error;
  }
};

export default {
  getLatestProducts,
  getProductById,
  getProductsByCategory,
};
