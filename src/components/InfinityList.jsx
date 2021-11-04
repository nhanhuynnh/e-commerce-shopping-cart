import PropTypes from 'prop-types';

import Grid from './Grid';
import ProductCard from './ProductCard';

const InfinityList = (props) => {
  return (
    <div>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {data.map((item, index) => (
          <ProductCard />
        ))}
      </Grid>
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
