import React, { useState } from 'react';

import Layout from '../components/Layout';
import SelfLogo from '../assets/images/selfmatter.webp';
import BIBlogo from '../assets/images/bib.jpeg';



const IndexPage = () => {
  const [isHovered, setHover] = useState(false);

  return (
  <Layout activeLink="providers">
    <div className="row m-2">
    <section className="page-section provider-card col-lg-4">
      <div className="container bg-faded rounded card" onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
        {isHovered && (
        <button className="btn provider-btn"
        >
          Visit Site
        </button>
      )}
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="p-5 d-flex m-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                Comfort
                </span>
                <span className="section-heading-lower">
                  Brain in Balance
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded mb-3 mb-lg-0"
            src={BIBlogo}
            alt=""
          />
          <div className="product-item-description d-flex align-self-center w-100">
            <div className="p-5 rounded">
              <p className="mb-0">
                Enjoy our comfortable, quiet environment while you wait for your session.
                Complementary coffee, tea and water is always available.
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </section>

    <section className="page-section col-lg-4">
      <div className="container bg-faded rounded">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className=" p-5 d-flex m-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                Comfort
                </span>
                <span className="section-heading-lower">
                  Lorem &amp; Ipsum
                </span>
              </h2>
            </div>
          </div>
          <img
            className="rounded mb-3 mb-lg-0 img-thumbnail"
            src={SelfLogo}
            alt=""
          />
          <div className="d-flex align-self-center w-100">
            <div className="p-5 rounded">
              <p className="mb-0">
                Enjoy our comfortable, quiet environment while you wait for your session.
                Complementary coffee, tea and water is always available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section col-lg-4">
      <div className="container bg-faded rounded">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className=" p-5 d-flex m-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                Comfort
                </span>
                <span className="section-heading-lower">
                  Lorem &amp; Ipsum
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded mb-3 mb-lg-0"
            src={BIBlogo}
            alt=""
          />
          <div className="product-item-description d-flex align-self-center w-100">
            <div className="p-5 rounded">
              <p className="mb-0">
                Enjoy our comfortable, quiet environment while you wait for your session.
                Complementary coffee, tea and water is always available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </Layout>
  );
};

export default IndexPage;
