import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { listProductDetails } from '../actions/productActions';
import CustomLoader from '../components/CustomLoader';

const ProductDetailsScreen = ({ match, histroy }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const ProductDetail = useSelector((state) => state.productDetails);

  const { loading, error, product } = ProductDetail;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      {loading ? (
        <CustomLoader type="Oval" width={50} height={50} />
      ) : error ? (
        <ProductDetails className="container">
          <Left>
            <Main>
              <img src={product.image} alt="" />
            </Main>
              <Thumbnail>
                <img src={product.image} alt="" />
              </Thumbnail>
              <Thumbnail>
                <img src={product.image} alt="" />
              </Thumbnail>
              <Thumbnail>
                <img src={product.image} alt="" />
              </Thumbnail>
              <Thumbnail>
                <img src={product.image} alt="" />
              </Thumbnail>
          </Left>

          <Right>
            <CatLabel>Home/T-shirt</CatLabel>
            <Title>{product.name}</Title>
            <Price>${product.price}</Price>
            {product.countInStock > 0 && (
              <Form>
                <div>
                  <Select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Select>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
              </Form>
            )}
            <InStock>Status: {product.countInStock === 0 ? 'Out of Stock' : 'In Stock'}</InStock>
            <Heading>Product Description</Heading>
            <Discription>{product.description}</Discription>
          </Right>
        </ProductDetails>
      )}
    </div>
  );
};

export default ProductDetailsScreen;
