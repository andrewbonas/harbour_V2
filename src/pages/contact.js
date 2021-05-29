import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm, watch } from 'emailjs-com';
import Layout from '../components/Layout';
init('user_k97ZHtGLHLXgxpguh0ago');

const IndexPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [statusMessage, setStatusMessage] = useState('');
  const onSubmit = async (data, e) => {
  const statusMessage = document.querySelector('.status-message');

    e.preventDefault();
    console.log(data);
    sendForm('default_service', 'harbour_template', '#contact-form').then(
      function (response) {
        e.target.reset();
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('Message sent!');
        statusMessage.className = 'status-message success';
        setTimeout(() => {
          statusMessage.className = 'status-message';
        }, 5000);
      },
      function (error) {
        console.log('FAILED...', error);
        setStatusMessage('Failed to send message! Please try again later.');
        statusMessage.className = 'status-message failure';
        setTimeout(() => {
          statusMessage.className = 'status-message';
        }, 5000);
      }
    );
  };

  return (
    <Layout activeLink="contact">
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner text-center rounded">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-upper">Reach Out</span>
                  <span className="section-heading-lower">Contact Us</span>
                </h2>
                {/*Section: Contact v.2*/}
                <section className="mb-4">
                  {/*Section description*/}
                  <p className="text-center w-responsive mx-auto mb-5">
                    Do you have any questions? Please do not hesitate to contact
                    us directly. Our team will come back to you within a matter
                    of hours to help you.
                  </p>
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-9 mb-md-0 mb-5">
                      <p className="status-message">{statusMessage}</p>
                      <form
                        id="contact-form"
                        name="contact-form"
                        action="mail.php"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        {/*Grid row*/}
                        <div className="row">
                          {/*Grid column*/}
                          <div className="col-md-6">
                            <div className="md-form mb-0">
                              <label htmlFor="name" className="d-flex ml-2">
                                Name:
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                {...register('name', { required: true })}
                              />
                              {errors.name && (
                                <p className="text-danger">Name is Required</p>
                              )}
                            </div>
                          </div>
                          {/*Grid column*/}
                          {/*Grid column*/}
                          <div className="col-md-6">
                            <div className="md-form mb-0">
                              <label htmlFor="email" className="d-flex ml-2">
                                Email:
                              </label>
                              <input
                                type="text"
                                id="email"
                                name="email"
                                className="form-control"
                                {...register('email', { required: true })}
                              />
                              {errors.email && (
                                <p className="text-danger">Email is Required</p>
                              )}
                            </div>
                          </div>
                          {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                        {/*Grid row*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="md-form mb-0">
                              <label htmlFor="subject" className="d-flex ml-2">
                                Subject:
                              </label>
                              <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-control"
                                {...register('subject', { required: true })}
                              />
                              {errors.subject && (
                                <p className="text-danger">
                                  Subject is Required
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        {/*Grid row*/}
                        {/*Grid row*/}
                        <div className="row">
                          {/*Grid column*/}
                          <div className="col-md-12">
                            <div className="md-form">
                              <label htmlFor="message" className="d-flex ml-2">
                                Message:
                              </label>
                              <textarea
                                type="text"
                                id="message"
                                name="message"
                                rows={7}
                                className="form-control md-textarea"
                                defaultValue={''}
                                {...register('message', { required: true })}
                              />
                              {errors.message && (
                                <p className="text-danger">
                                  Message is Required
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        {/*Grid row*/}

                        <div className="text-center text-md-left">
                          <button type="submit" className="btn btn-primary m-2">
                            Send
                          </button>
                        </div>
                      </form>
                      <div className="status" id="status" />
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-3 text-center">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <i className="fas fa-map-marker-alt fa-2x" />
                          <p>
                            205-1070 Ridgeway Avenue, Coquitlam, BC, V3J 1S7
                          </p>
                        </li>
                        <li>
                          <i className="fas fa-phone mt-4 fa-2x" />
                          <p>778-668-4176</p>
                        </li>
                        <li>
                          <i className="fas fa-envelope mt-4 fa-2x" />
                          <p>
                            selfmatterscounselling
                            <br />
                            @gmail.com
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/*Grid column*/}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default IndexPage;
