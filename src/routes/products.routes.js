import Router from 'express';
import * as controller from '../controllers/products.controller';


const router = Router();

router.post('/', controller.createProduct)

router.get('/', controller.getProducts)

router.put('/:productId', controller.updateProduct)

router.delete('/:productId', controller.deleteProduct)


export default router;