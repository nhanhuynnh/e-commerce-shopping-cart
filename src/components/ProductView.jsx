import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router';

const ProductView = (props) => {
  return (
    <div className='product'>
      <div className='product__images'>
        <div className='product__images__list'>
          <div className='product__images__list__item'></div>
          <div className='product__images__list__item'></div>
        </div>
        <div className='product__images__main'></div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default withRouter(ProductView);
