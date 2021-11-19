import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './Button';

const HeroSlider = (props) => {
  const data = props.data;

  const timeOut = props.timeOut ? props.timeOut : 3000;

  return (
    <div className='hero-slider'>
      {data.map((item, index) => (
        <HeroSliderItem />
      ))}
      {props.control ? (
        <div className='hero-slider__control'>
          <div className='hero-slider__control__item'>
            <i className='bx bx-chevron-left'></i>
          </div>
          <div className='hero-slider__control__item'>
            <div className='index'></div>
          </div>
          <div className='hero-slider__control__item'>
            <i className='bx bx-chevron-right'></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

const HeroSliderItem = (props) => (
  <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
    <div className='hero-slider__item__info'>
      <div
        className={`hero-slider__item__info__title color-${props.item.color}`}
      >
        <span>{props.item.title}</span>
      </div>
      <div className='hero-slider__item__info__description'>
        <span>{props.item.description}</span>
      </div>
      <div className='hero-slider__item__info__btn'>
        <Link to={props.item.path}>
          <Button>xem chi tiết</Button>
        </Link>
      </div>
    </div>
    <div className='hero-slider__item__image'>
      <img src='' alt='' />
    </div>
  </div>
);

export default HeroSlider;
