import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    // <div className='footer'>
    //   <h2>Thank you for visiting our page</h2>
    // </div>
        <div className='footer'>
      
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        </section>
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                    Coder <span>E</span>commerce
                  </h6>
                  <p>
                    Everything you need here
                  </p>
                </MDBCol>
    
                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <Link to='category/electronics' className='text-reset'>Electronics</Link>
                  </p>
                  <p>
                  <Link to='category/jewelery' className='text-reset'>Jewelery</Link>
                  </p>
                  <p>
                  <Link to="category/men's%20clothing" className='text-reset'>Men's Clothing</Link>
                  </p>
                  <p>
                  <Link to="category/women's%20clothing" className='text-reset'>Women's Clothing</Link>
                  </p>
                </MDBCol>
    
                <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                  <a href='#!' className='text-reset'>
                      Facebook
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Instagram
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Twitter
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Linkedin
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon color='secondary' icon='home' className='me-2' />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBFooter>
        </div>
      );
    }


export default Footer