import React, { useState } from 'react';

import Layout from '../components/Layout';
import selfLogo from '../assets/images/selfMatter.png';
import bibLogo from '../assets/images/bib.jpeg';
import rentLogo from '../assets/images/rentLogo.png';




const IndexPage = () => {
  const [isHoveredOne, setHoverOne] = useState(false);
  const [isHoveredTwo, setHoverTwo] = useState(false);
  const [isHoveredThree, setHoverThree] = useState(false);

  return (
  <Layout activeLink="providers">
    <div className="row m-2">
    <section className="page-section provider-card col-lg-4">
      <div className="overlay rounded">
      <div className="bg-faded rounded card" role="button" tabIndex={0} onMouseOver={() => setHoverOne(true)}
      onFocus={() => setHoverOne(true)}
      onMouseLeave={() => setHoverOne(false)}
      onBlur={() => setHoverOne(false)}>
        {isHoveredOne && (
        <a href="https://www.braininbalance.ca/" target="_blank" rel="noreferrer" className="btn provider-btn btn-lg align-self-center text-white"
        >
          Visit Site
        </a>
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
            className="bib-item-img mx-auto d-flex rounded mb-3 mb-lg-0"
            src={bibLogo}
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
      
      </div>
    </section>

    <section className="page-section provider-card col-lg-4">
      <div className="overlay rounded">
      <div className="bg-faded rounded card" role="button" tabIndex={0} onMouseOver={() => setHoverTwo(true)}
       onFocus={() => setHoverTwo(true)}
       onMouseLeave={() => setHoverTwo(false)}
       onBlur={() => setHoverTwo(false)}>
        {isHoveredTwo && (
        <a href="https://www.selfmatters.ca/" target="_blank" rel="noreferrer" className="btn provider-btn btn-lg align-self-center text-white"
        >
          Visit Site
        </a>
      )}
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="p-5 d-flex m-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                Comfort
                </span>
                <span className="section-heading-lower">
                  Self Matters Counselling
                </span>
              </h2>
            </div>
          </div>
          <img
            className="self-item-img mx-auto d-flex rounded mb-3 mb-lg-0"
            src={selfLogo}
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
      
      </div>
    </section>

    <section className="page-section provider-card col-lg-4">
      <div className="overlay rounded">
      <div className="bg-faded rounded card" role="button" tabIndex={0} onMouseOver={() => setHoverThree(true)}
       onFocus={() => setHoverThree(true)}
       onMouseLeave={() => setHoverThree(false)}
       onBlur={() => setHoverThree(false)}>
        {isHoveredThree && (
        <a role="button" href="/contact" className="btn provider-btn btn-lg align-self-center text-white"
        >
          Contact Us
        </a>
      )}
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="p-5 d-flex m-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                Comfort
                </span>
                <span className="section-heading-lower">
                  Room Rentals
                </span>
              </h2>
            </div>
          </div>
          <img
            className="rental-item-img mx-auto d-flex rounded mb-3 mb-lg-0"
            src={rentLogo}
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
      
      </div>
    </section>
    </div>
  </Layout>
  );
};

export default IndexPage;
