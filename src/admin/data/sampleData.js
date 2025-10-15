// Sample data for admin panel demonstration

export const sampleProducts = [
  {
    _id: "prod_001",
    name: "Lavender Dreams Candle",
    category: "jar-candles",
    price: 1299,
    scents: ["Lavender", "Vanilla", "Chamomile"],
    tokenId: "LAV001",
    description: "A soothing blend of lavender and vanilla that creates the perfect ambiance for relaxation and sleep.",
    productBrand: "KAVERA Luxury",
    display: true,
    productImageGallery: [
      { url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" },
      { url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" }
    ],
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    _id: "prod_002", 
    name: "Ocean Breeze Pillar",
    category: "pillar-candles",
    price: 899,
    scents: ["Sea Salt", "Ocean Mist", "Driftwood"],
    tokenId: "OCEAN002",
    description: "Capture the essence of the ocean with this refreshing pillar candle featuring marine-inspired scents.",
    productBrand: "KAVERA Luxury",
    display: true,
    productImageGallery: [
      { url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" }
    ],
    createdAt: "2024-01-20T14:15:00Z"
  },
  {
    _id: "prod_003",
    name: "Rose Garden Collection",
    category: "gift-sets",
    price: 2499,
    scents: ["Rose", "Jasmine", "Gardenia"],
    tokenId: "ROSE003",
    description: "A luxurious gift set featuring three elegant candles with floral fragrances perfect for any occasion.",
    productBrand: "KAVERA Luxury",
    display: true,
    productImageGallery: [
      { url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" },
      { url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" }
    ],
    createdAt: "2024-01-25T09:45:00Z"
  },
  {
    _id: "prod_004",
    name: "Sandalwood Meditation",
    category: "scented-candles",
    price: 1599,
    scents: ["Sandalwood", "Frankincense", "Myrrh"],
    tokenId: "SAND004",
    description: "Perfect for meditation and spiritual practices, this candle combines ancient aromatherapy with modern luxury.",
    productBrand: "KAVERA Luxury",
    display: true,
    productImageGallery: [
      { url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" }
    ],
    createdAt: "2024-02-01T16:20:00Z"
  },
  {
    _id: "prod_005",
    name: "Vanilla Bean Delight",
    category: "jar-candles",
    price: 1099,
    scents: ["Vanilla", "Cream", "Sugar"],
    tokenId: "VAN005",
    description: "Indulge in the sweet, comforting aroma of pure vanilla bean that fills your home with warmth and coziness.",
    productBrand: "KAVERA Luxury",
    display: true,
    productImageGallery: [
      { url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" }
    ],
    createdAt: "2024-02-05T11:30:00Z"
  },
  {
    _id: "prod_006",
    name: "Citrus Burst T-Light",
    category: "tlight-candles",
    price: 299,
    scents: ["Lemon", "Orange", "Grapefruit"],
    tokenId: "CITRUS006",
    description: "Energizing citrus blend that brightens any space with fresh, uplifting aromas.",
    productBrand: "KAVERA Luxury",
    display: true,
    productImageGallery: [
      { url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" }
    ],
    createdAt: "2024-02-10T13:45:00Z"
  },
  {
    _id: "prod_007",
    name: "Spiced Apple Cinnamon",
    category: "seasonal",
    price: 1199,
    scents: ["Apple", "Cinnamon", "Nutmeg", "Clove"],
    tokenId: "SPICE007",
    description: "Warm and inviting seasonal candle that brings the cozy feeling of autumn to your home.",
    productBrand: "KAVERA Luxury",
    display: true,
    productImageGallery: [
      { url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" }
    ],
    createdAt: "2024-02-15T08:15:00Z"
  },
  {
    _id: "prod_008",
    name: "Eucalyptus Mint Therapy",
    category: "scented-candles",
    price: 1399,
    scents: ["Eucalyptus", "Mint", "Tea Tree"],
    tokenId: "EUC008",
    description: "Therapeutic blend that promotes relaxation and mental clarity with refreshing eucalyptus and mint.",
    productBrand: "KAVERA Luxury",
    display: true,
    productImageGallery: [
      { url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" }
    ],
    createdAt: "2024-02-20T15:30:00Z"
  }
];

export const sampleOrders = [
  {
    _id: "order_001",
    user: {
      name: "Priya Sharma",
      email: "priya.sharma@email.com"
    },
    orderItems: [
      {
        name: "Lavender Dreams Candle",
        price: 1299,
        quantity: 2
      },
      {
        name: "Ocean Breeze Pillar", 
        price: 899,
        quantity: 1
      }
    ],
    totalPrice: 3497,
    orderStatus: "Processing",
    shippingInfo: {
      address: "123 MG Road, Bangalore",
      city: "Bangalore",
      state: "Karnataka",
      pinCode: "560001",
      country: "India",
      phoneNo: "+91 9876543210"
    },
    createdAt: "2024-02-25T10:30:00Z"
  },
  {
    _id: "order_002",
    user: {
      name: "Rajesh Kumar",
      email: "rajesh.kumar@email.com"
    },
    orderItems: [
      {
        name: "Rose Garden Collection",
        price: 2499,
        quantity: 1
      }
    ],
    totalPrice: 2499,
    orderStatus: "Shipped",
    shippingInfo: {
      address: "456 Park Street, Mumbai",
      city: "Mumbai", 
      state: "Maharashtra",
      pinCode: "400001",
      country: "India",
      phoneNo: "+91 9876543211"
    },
    createdAt: "2024-02-24T14:15:00Z"
  },
  {
    _id: "order_003",
    user: {
      name: "Anita Patel",
      email: "anita.patel@email.com"
    },
    orderItems: [
      {
        name: "Sandalwood Meditation",
        price: 1599,
        quantity: 1
      },
      {
        name: "Eucalyptus Mint Therapy",
        price: 1399,
        quantity: 1
      }
    ],
    totalPrice: 2998,
    orderStatus: "Delivered",
    shippingInfo: {
      address: "789 Gandhi Nagar, Delhi",
      city: "Delhi",
      state: "Delhi",
      pinCode: "110001",
      country: "India", 
      phoneNo: "+91 9876543212"
    },
    createdAt: "2024-02-23T09:45:00Z"
  },
  {
    _id: "order_004",
    user: {
      name: "Vikram Singh",
      email: "vikram.singh@email.com"
    },
    orderItems: [
      {
        name: "Vanilla Bean Delight",
        price: 1099,
        quantity: 3
      },
      {
        name: "Citrus Burst T-Light",
        price: 299,
        quantity: 5
      }
    ],
    totalPrice: 4292,
    orderStatus: "Processing",
    shippingInfo: {
      address: "321 Brigade Road, Bangalore",
      city: "Bangalore",
      state: "Karnataka", 
      pinCode: "560025",
      country: "India",
      phoneNo: "+91 9876543213"
    },
    createdAt: "2024-02-26T16:20:00Z"
  },
  {
    _id: "order_005",
    user: {
      name: "Meera Joshi",
      email: "meera.joshi@email.com"
    },
    orderItems: [
      {
        name: "Spiced Apple Cinnamon",
        price: 1199,
        quantity: 2
      }
    ],
    totalPrice: 2398,
    orderStatus: "Cancelled",
    shippingInfo: {
      address: "654 MG Road, Pune",
      city: "Pune",
      state: "Maharashtra",
      pinCode: "411001", 
      country: "India",
      phoneNo: "+91 9876543214"
    },
    createdAt: "2024-02-22T11:30:00Z"
  },
  {
    _id: "order_006",
    user: {
      name: "Arjun Reddy",
      email: "arjun.reddy@email.com"
    },
    orderItems: [
      {
        name: "Lavender Dreams Candle",
        price: 1299,
        quantity: 1
      },
      {
        name: "Rose Garden Collection",
        price: 2499,
        quantity: 1
      },
      {
        name: "Sandalwood Meditation",
        price: 1599,
        quantity: 1
      }
    ],
    totalPrice: 5397,
    orderStatus: "Shipped",
    shippingInfo: {
      address: "987 Residency Road, Bangalore",
      city: "Bangalore",
      state: "Karnataka",
      pinCode: "560025",
      country: "India",
      phoneNo: "+91 9876543215"
    },
    createdAt: "2024-02-21T13:45:00Z"
  }
];

// Helper function to get sample data
export const getSampleProducts = () => {
  return [...sampleProducts];
};

export const getSampleOrders = () => {
  return [...sampleOrders];
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return sampleProducts.filter(product => product.category === category);
};

// Helper function to get orders by status
export const getOrdersByStatus = (status) => {
  return sampleOrders.filter(order => order.orderStatus === status);
};
