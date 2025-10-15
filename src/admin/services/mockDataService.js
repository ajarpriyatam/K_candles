import { getSampleProducts, getSampleOrders } from '../data/sampleData';

// Mock delay to simulate API calls
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock Products Service
export const mockProductsService = {
  // Get all products
  getAllProducts: async () => {
    await delay(500); // Simulate network delay
    return {
      success: true,
      products: getSampleProducts(),
      count: getSampleProducts().length
    };
  },

  // Get product by ID
  getProductById: async (id) => {
    await delay(300);
    const product = getSampleProducts().find(p => p._id === id);
    return {
      success: !!product,
      product: product || null
    };
  },

  // Create new product
  createProduct: async (productData) => {
    await delay(800);
    const newProduct = {
      _id: `prod_${Date.now()}`,
      ...productData,
      createdAt: new Date().toISOString()
    };
    return {
      success: true,
      product: newProduct
    };
  },

  // Update product
  updateProduct: async (id, productData) => {
    await delay(600);
    return {
      success: true,
      product: { _id: id, ...productData }
    };
  },

  // Delete product
  deleteProduct: async (id) => {
    await delay(400);
    return {
      success: true,
      message: 'Product deleted successfully'
    };
  }
};

// Mock Orders Service
export const mockOrdersService = {
  // Get all orders
  getAllOrders: async () => {
    await delay(500);
    return {
      success: true,
      orders: getSampleOrders(),
      count: getSampleOrders().length
    };
  },

  // Get order by ID
  getOrderById: async (id) => {
    await delay(300);
    const order = getSampleOrders().find(o => o._id === id);
    return {
      success: !!order,
      order: order || null
    };
  },

  // Update order status
  updateOrderStatus: async (id, status) => {
    await delay(400);
    return {
      success: true,
      order: { _id: id, orderStatus: status }
    };
  }
};

// Mock Dashboard Service
export const mockDashboardService = {
  // Get dashboard statistics
  getDashboardStats: async () => {
    await delay(300);
    const products = getSampleProducts();
    const orders = getSampleOrders();
    
    const totalValue = products.reduce((sum, product) => sum + product.price, 0);
    const averagePrice = totalValue / products.length;
    const uniqueBrands = [...new Set(products.map(p => p.productBrand))].length;
    
    return {
      success: true,
      stats: {
        totalProducts: products.length,
        totalValue: totalValue,
        averagePrice: Math.round(averagePrice),
        uniqueBrands: uniqueBrands,
        totalOrders: orders.length,
        processingOrders: orders.filter(o => o.orderStatus === 'Processing').length,
        shippedOrders: orders.filter(o => o.orderStatus === 'Shipped').length,
        deliveredOrders: orders.filter(o => o.orderStatus === 'Delivered').length
      }
    };
  }
};

// Export all services
export default {
  products: mockProductsService,
  orders: mockOrdersService,
  dashboard: mockDashboardService
};
