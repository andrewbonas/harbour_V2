import React from 'react';

import Layout from '../components/Layout';

import BIBfront from '../assets/images/BIBfront.jpeg';
import Lobby from '../assets/images/Lobby.jpg';
import OfficeRoom from '../assets/images/OfficeRoom.jpg';

const IndexPage = () => (
  <Layout activeLink="providers">
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
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
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={BIBfront}
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Enjoy our comfortable, quiet environment while you wait for your session.
                Complementary coffee, tea and water is always available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Professional
                </span>
                <span className="section-heading-lower">
                  Lorem &amp; Ipsum
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={Lobby}
            alt=""
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
               Newly improved noise-reduced rooms ensures your privacy so you can be assured of a space designed with your emotional security.
               Your comfort and ease of mind is our utmost concern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Centrally Located
                </span>
                <span className="section-heading-lower">
                  Lorem Ipsum
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={OfficeRoom}
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Easy access from Highway #1, Lougheed Highway and Brunette Avenue. We are just east of Lougheed Mall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
