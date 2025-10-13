import axiosInstance from "../services/axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_ADMIN_PRODUCT_FAIL,
  ALL_ADMIN_PRODUCT_REQUEST,
  ALL_ADMIN_PRODUCT_SUCCESS,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_RESET,
  CLEAR_ERRORS,
} from "../constant/productConstant";

export const getProduct = () => async(dispatch)=>{
  try{
    dispatch({type:ALL_PRODUCT_REQUEST});
    
    // Sample data for testing (backend not working)
    const sampleProducts = [
      {
        _id: "1",
        tokenId: "A001",
        name: "Lavender Dreams Jar Candle",
        price: 899,
        originalPrice: 1299,
        category: "Jar Candles",
        scent: "Lavender",
        candleType: "Soy Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg" }
        ]
      },
      {
        _id: "2",
        tokenId: "A002",
        name: "Vanilla Bliss Pillar Candle",
        price: 699,
        originalPrice: 999,
        category: "Pillar Candles",
        scent: "Vanilla",
        candleType: "Paraffin Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODczOTUkajUxJGwwJGgw" }
        ]
      },
      {
        _id: "3",
        tokenId: "A003",
        name: "Rose Garden T-Light Pack",
        price: 399,
        originalPrice: null,
        category: "T-Light Candles",
        scent: "Rose",
        candleType: "Soy Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODczOTUkajUxJGwwJGgw" }
        ]
      },
      {
        _id: "4",
        tokenId: "A004",
        name: "Sandalwood Serenity Jar",
        price: 1099,
        originalPrice: null,
        category: "Jar Candles",
        scent: "Sandalwood",
        candleType: "Beeswax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" }
        ]
      },
      {
        _id: "5",
        tokenId: "A005",
        name: "Ocean Breeze Gift Set",
        price: 1899,
        originalPrice: 2499,
        category: "Gift Sets",
        scent: "Ocean Breeze",
        candleType: "Soy Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODczOTUkajUxJGwwJGgw" }
        ]
      },
      {
        _id: "6",
        tokenId: "A006",
        name: "Cinnamon Spice Pillar",
        price: 799,
        originalPrice: null,
        category: "Pillar Candles",
        scent: "Cinnamon",
        candleType: "Soy Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg" }
        ]
      },
      {
        _id: "7",
        tokenId: "B001",
        name: "Jasmine Night T-Lights",
        price: 449,
        originalPrice: 599,
        category: "T-Light Candles",
        scent: "Jasmine",
        candleType: "Paraffin Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg" }
        ]
      },
      {
        _id: "8",
        tokenId: "B002",
        name: "Eucalyptus Mint Jar Candle",
        price: 949,
        originalPrice: null,
        category: "Jar Candles",
        scent: "Eucalyptus Mint",
        candleType: "Soy Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg" }
        ]
      },
      {
        _id: "9",
        tokenId: "B003",
        name: "Luxury Candle Collection",
        price: 2499,
        originalPrice: 3499,
        category: "Gift Sets",
        scent: "Mixed",
        candleType: "Premium Wax Blend",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODczOTUkajUxJGwwJGgw" }
        ]
      },
      {
        _id: "10",
        tokenId: "B004",
        name: "Amber & Wood Decorative Candle",
        price: 1299,
        originalPrice: null,
        category: "Home Decor",
        scent: "Amber Wood",
        candleType: "Soy Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODczOTUkajUxJGwwJGgw" }
        ]
      },
      {
        _id: "11",
        tokenId: "B005",
        name: "Citrus Fresh Pillar",
        price: 699,
        originalPrice: 899,
        category: "Pillar Candles",
        scent: "Citrus",
        candleType: "Beeswax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg" }
        ]
      },
      {
        _id: "12",
        tokenId: "B006",
        name: "Peony Blossom Jar",
        price: 999,
        originalPrice: null,
        category: "Jar Candles",
        scent: "Peony",
        candleType: "Soy Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" }
        ]
      },
      {
        _id: "13",
        tokenId: "B007",
        name: "Geometric Candle Holder Set",
        price: 1599,
        originalPrice: 1999,
        category: "Home Decor",
        scent: "Unscented",
        candleType: "Decorative",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODczOTUkajUxJGwwJGgw" }
        ]
      },
      {
        _id: "14",
        tokenId: "B008",
        name: "Peppermint Joy T-Lights",
        price: 499,
        originalPrice: null,
        category: "T-Light Candles",
        scent: "Peppermint",
        candleType: "Soy Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODczOTUkajUxJGwwJGgw" }
        ]
      },
      {
        _id: "15",
        tokenId: "B009",
        name: "Cherry Blossom Gift Box",
        price: 2199,
        originalPrice: null,
        category: "Gift Sets",
        scent: "Cherry Blossom",
        candleType: "Premium Soy Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODczOTUkajUxJGwwJGgw" }
        ]
      },
      {
        _id: "16",
        tokenId: "B010",
        name: "Coffee & Cream Pillar",
        price: 849,
        originalPrice: 1099,
        category: "Pillar Candles",
        scent: "Coffee",
        candleType: "Soy Wax",
        productImageGallery: [
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODczOTUkajUxJGwwJGgw" }
        ]
      }
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    dispatch({
      type:ALL_PRODUCT_SUCCESS,
      payload:{
        visibleProducts: sampleProducts,
        visibleProductscount: sampleProducts.length
      },
    })
  }catch(error){
    dispatch({
      type:ALL_PRODUCT_FAIL,
      payload: error.response?.data?.message || error.message || "Failed to fetch products",
    });
  }
}

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axiosInstance.post(
      `/admin/product/new`,
      productData,
      config
    );
    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    
    // Sample product details data (backend not working)
    const sampleProductDetails = {
      "1": {
        _id: "1",
        tokenId: "A001",
        name: "Lavender Dreams Jar Candle",
        price: 899,
        originalPrice: 1299,
        category: "Jar Candles",
        scent: "Lavender",
        candleType: "Soy Wax",
        description: "Transform your space into a tranquil sanctuary with our Lavender Dreams Jar Candle. Hand-poured with premium soy wax and infused with pure lavender essential oils, this candle creates a calming atmosphere perfect for relaxation and meditation. The elegant glass jar adds a touch of sophistication to any room. Burn time: 40-45 hours. Made with eco-friendly, sustainable materials.",
        scents: ["Vanilla + Oud", "Rose + Oud", "Dark Amber + Oud"],
        productImageGallery: [
          { url: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg?_gl=1*1l66aon*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODYyNjQkajI4JGwwJGgw" },
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg?_gl=1*1wstoeo*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODcwNTgkajI5JGwwJGgw" },
          { url: "https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg" },
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODczOTUkajUxJGwwJGgw" }
        ]
      },
      "2": {
        _id: "2",
        tokenId: "A002",
        name: "Vanilla Bliss Pillar Candle",
        price: 699,
        originalPrice: 999,
        category: "Pillar Candles",
        scent: "Vanilla",
        candleType: "Paraffin Wax",
        description: "Experience pure bliss with our Vanilla Bliss Pillar Candle. This classic pillar design features a rich, warm vanilla fragrance that fills your home with sweetness and comfort. Perfect for centerpieces, dinner tables, or creating a cozy ambiance. Premium paraffin wax ensures a clean, even burn. Dimensions: 3\" x 6\". Burn time: 50-60 hours.",
        scents: ["Vanilla + Oud", "Rose + Oud", "Dark Amber + Oud"],
        productImageGallery: [
          { url: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg" },
          { url: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg" },
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" },
          { url: "https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg" }
        ]
      },
      "3": {
        _id: "3",
        tokenId: "A003",
        name: "Rose Garden T-Light Pack",
        price: 399,
        originalPrice: null,
        category: "T-Light Candles",
        scent: "Rose",
        candleType: "Soy Wax",
        description: "Bring the romance of a blooming rose garden into your home with our T-Light Pack. Each pack contains 12 premium soy wax tealights infused with natural rose essence. Perfect for creating a romantic atmosphere, spa settings, or special occasions. Burns cleanly without soot. Each tealight burns for 4-5 hours. Eco-friendly and biodegradable.",
        scents: ["Vanilla + Oud", "Rose + Oud", "Dark Amber + Oud"],
        productImageGallery: [
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" },
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" },
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg" },
          { url: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg" }
        ]
      },
      "4": {
        _id: "4",
        tokenId: "A004",
        name: "Sandalwood Serenity Jar",
        price: 1099,
        originalPrice: null,
        category: "Jar Candles",
        scent: "Sandalwood",
        candleType: "Beeswax",
        description: "Discover inner peace with our Sandalwood Serenity Jar Candle. Made from 100% pure beeswax and infused with authentic sandalwood essential oil, this candle purifies the air while creating a meditative atmosphere. Beeswax naturally releases negative ions that help cleanse the air. Features a wooden wick for a gentle crackling sound. Burn time: 55-60 hours.",
        scents: ["Vanilla + Oud", "Rose + Oud", "Dark Amber + Oud"],
        productImageGallery: [
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" },
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" },
          { url: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg" },
          { url: "https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg" }
        ]
      },
      "5": {
        _id: "5",
        tokenId: "A005",
        name: "Ocean Breeze Gift Set",
        price: 1899,
        originalPrice: 2499,
        category: "Gift Sets",
        scent: "Ocean Breeze",
        candleType: "Soy Wax",
        description: "Bring the refreshing essence of the ocean into any home with our Ocean Breeze Gift Set. This luxurious collection includes 3 jar candles in varying sizes, all featuring our signature ocean breeze fragrance. Beautifully packaged in an elegant gift box, making it perfect for housewarmings, birthdays, or special occasions. Each candle is hand-poured with premium soy wax. Combined burn time: 100+ hours.",
        scents: ["Vanilla + Oud", "Rose + Oud", "Dark Amber + Oud"],
        productImageGallery: [
          { url: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg" },
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" },
          { url: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg" },
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" }
        ]
      },
      "6": {
        _id: "6",
        tokenId: "A006",
        name: "Cinnamon Spice Pillar",
        price: 799,
        originalPrice: null,
        category: "Pillar Candles",
        scent: "Cinnamon",
        candleType: "Soy Wax",
        description: "Warm your home with the cozy aroma of our Cinnamon Spice Pillar Candle. Perfect for fall and winter seasons, this candle fills your space with the comforting scent of freshly ground cinnamon and subtle spice notes. Hand-poured using premium soy wax for a clean burn. Ideal for creating a welcoming atmosphere. Burn time: 45-50 hours.",
        scents: ["Vanilla + Oud", "Rose + Oud", "Dark Amber + Oud"],
        productImageGallery: [
          { url: "https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg" },
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" },
          { url: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg" },
          { url: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg" }
        ]
      }
    };
    
    // Get product details by ID or return first product as default
    const productDetails = sampleProductDetails[id] || sampleProductDetails["1"];
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: productDetails,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response?.data?.message || "Something went wrong",
    });
  }
};

export const getAllProductsAdmin = () => async(dispatch)=>{
  try{
    dispatch({type:ALL_ADMIN_PRODUCT_REQUEST});
    let link = `/admin/products`;
    const {data} = await axiosInstance.get(link)
    dispatch({
      type:ALL_ADMIN_PRODUCT_SUCCESS,
      payload:data,
    })
  }catch(error){
    dispatch({
      type:ALL_ADMIN_PRODUCT_FAIL,
      payload: error.response?.data?.message || error.message || "Failed to fetch admin products",
    });
  }
}

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    const { data } = await axiosInstance.delete(`/admin/product/${id}`);
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response?.data?.message || "Failed to delete product",
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearDeleteSuccess = () => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_RESET });
};