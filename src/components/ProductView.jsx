import PropTypes from 'prop-types';

import { withRouter } from 'react-router';

const ProductView = (props) => {
    return (
        <div className='product'>
            <div className='product__images'>
                <div className='product__images__list'>
                    <div className='product__images__list__item'>
                        <img src='' alt='' />
                    </div>
                    <div className='product__images__list__item'>
                        <img src='' alt='' />
                    </div>
                </div>
                <div className='product__images__main'>
                    <img src='' alt='' />
                </div>
            </div>
        </div>
    );
};

ProductView.propTypes = {
    product: PropTypes.object.isRequired,
};

export default withRouter(ProductView);
