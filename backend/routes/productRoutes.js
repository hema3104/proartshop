import express from 'express';
const router = express.Router();
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct , createProductReview, getTopProducts,getImages  } from '../controllers/productController.js';

router.route('/').get(getProducts).post( createProduct);
router.get('/top', getTopProducts);
router.get('/images',getImages);
router.route('/:id').get(getProductById).put( updateProduct).delete( deleteProduct);
router.route('/:id/reviews').post(createProductReview);


export default router;


/*import express from 'express';
const router = express.Router();
import { getProducts, getProductById, createProduct, updateProduct } from '../controllers/productController.js';
router.route('/').get(getProducts).post( createProduct);
router.route('/:id').get(getProductById).put( updateProduct);
export default router;*/
/*router.get
('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

router.get('/:id',asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(product) {
 return res.json(product);
    } else {
res.status(404);
throw new Error('Resource not found');
}
})
);*/

