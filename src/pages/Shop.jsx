import React, { useState } from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductsList';
import { toast } from 'react-toastify';

const Shop = () => {
  const [productData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === 'all') {
      setProductData(products);
      toast.success('All Products');
    }
    if (filterValue === 'sofa') {
      const filteredProducts = products.filter((item) => item.category === 'sofa');
      setProductData(filteredProducts);
      toast.success('Sofa Product');
    }

    if (filterValue === 'mobile') {
      const filteredProducts = products.filter((item) => item.category === 'mobile');
      setProductData(filteredProducts);
      toast.success('Mobile Product');
    }

    if (filterValue === 'chair') {
      const filteredProducts = products.filter((item) => item.category === 'chair');
      setProductData(filteredProducts);
      toast.success('Chair Product');
    }

    if (filterValue === 'watch') {
      const filteredProducts = products.filter((item) => item.category === 'watch');
      setProductData(filteredProducts);
      toast.success('Watch Product');
    }

    if (filterValue === 'wireless') {
      const filteredProducts = products.filter((item) => item.category === 'wireless');
      setProductData(filteredProducts);
      toast.success('Wireless Product');
    }
  };
  const handleSearch = (e) => {
    const search = e.target.value;
    const searchProducts = products.filter((item) => item.productName.toLowerCase().includes(search.toLowerCase()));
    setProductData(searchProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="all">Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="filter__widget text-end">
                <select onChange={handleFilter}>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder="Search......" onChange={handleSearch} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1 className="text-center fs-4"> No Products are found !</h1>
            ) : (
              <ProductList data={productData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
