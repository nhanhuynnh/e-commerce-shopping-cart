import React, { useEffect, useState } from 'react';
import ProductView from './ProductView';

import Button from './Button';
import productData from '../assets/fake-data/products';

const ProductViewModal = () => {
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        setProduct(productData.getProductBySlug());
    }, []);

    return (
        <div>
            <div className='product-view__modal__content'>
                <ProductView product={product} />
                <div className='product-view__modal__content__close'>
                    <Button>đóng</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
