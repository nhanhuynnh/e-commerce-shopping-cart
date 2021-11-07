import ProductView from './ProductView';

import Button from './Button';

const ProductViewModal = () => {
    return (
        <div>
            <div className='product-view__modal__content'>
                <ProductView />
                <div className='product-view__modal__content__close'>
                    <Button>đóng</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
