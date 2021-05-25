import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';

const IndexPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  
  return(
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
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={handleSubmit(onSubmit)}>
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control" {...register('name', { required: true })} />
                    <label htmlFor="name" className>Your name</label>
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control" {...register('email', { required: true })} />
                    <label htmlFor="email" className>Your email</label>
                  </div>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control" {...register('subject', { required: true })} />
                    <label htmlFor="subject" className>Subject</label>
                  </div>
                </div>
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows={7} className="form-control md-textarea" defaultValue={""} {...register('message', { required: true })} />
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
              {/*Grid row*/}
            
            <div className="text-center text-md-left">
              <button type="submit" className="btn btn-primary" >Send</button>
            </div>
            </form>
            <div className="status" id="status" />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x" />
                <p>205-1070 Ridgeway Avenue, Coquitlam, BC, V3J 1S7</p>
              </li>
              <li><i className="fas fa-phone mt-4 fa-2x" />
                <p>778-668-4176</p>
              </li>
              <li><i className="fas fa-envelope mt-4 fa-2x" />
                <p>selfmatterscounselling<br />@gmail.com</p>
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
