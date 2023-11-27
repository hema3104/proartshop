import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    // Define product schema fields here
    name: { type: String, required: true },
    // Add more fields as needed
  });
const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
    type: String,
    required:true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    arts:{
        type: [String],
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
     description: {
        type: String,
        required: true,
    },
    exhibitionDate: {
        type: String,
    },
    exhibitionVenue: {
        type: String,
    },
    reviews: [reviewSchema],
    rating: {
        type: String,
        required: true,
    },
    numReviews: {
        type: Number,
        required: true,
        default:0,
    },
    price: {
        type: Number,
        required: true,
        default:0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },

}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;