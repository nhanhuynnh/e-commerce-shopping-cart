import PropTypes from 'prop-types';

const CartItem = (props) => {
  return (
    <div className='cart__item'>
      <div className='cart__item__image'></div>
      <div className='cart__item__info'>
        <div className='cart__item__info__name'></div>
        <div className='cart__item__info__price'></div>
        <div className='cart__item__info__quantity'>
          <div className='product__info__item__quantity'>
            <div className='product__info__item__quantity__btn'>
              <i className='bx bx-minus'></i>
            </div>
            <div className='product__info__item__quantity__input'></div>
            <div className='product__info__item__quantity__btn'>
              <i className='bx bx-plus'></i>
            </div>
          </div>
        </div>
        <div className='cart__item__del'>
          <i className='bx bx-trash'></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
