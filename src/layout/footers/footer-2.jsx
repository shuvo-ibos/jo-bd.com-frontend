'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import { Email, Location } from '@/svg';
// import pay from '@assets/img/footer/footer-pay.png';
import pay from '@assets/pic/payment.png';
import Logo from '@/components/Logo/Logo';
import { api } from '@/env';
import axios from 'axios';
import { Mail, MapPin, Timer } from 'lucide-react';

const FooterTwo = () => {
  const social_data =[
    {
      id: 1,
      link: `https://www.facebook.com/exclusivejamdanisaree`,
      icon: "fa-brands fa-facebook-f",
      title: "Facebook",
    },
    {
      id: 4,
      link: `https://www.instagram.com/jo_preserving_heritage/`,
      icon: "fa-brands fa-instagram",
      title: "Instagram",
    },

  ]

  const [message, setMessage] = useState('');
  const emailRef = useRef(null);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const email = emailRef.current?.value;

  if (!email) {
    setMessage('Please enter an email address.');
    return;
  }

  try {
    const res = await axios.post(`${api.baseUrl}/api/subscribe`, { email });

    // Access the response data directly
    setMessage('Subscription successful!');
    emailRef.current.value = '';
  } catch (error) {
    const msg =
      error?.response?.data?.message || 'Subscription failed. Please try again.';
    setMessage(msg);
  }
};


  return (
    <>
      <footer>
        <div className="tp-footer-area tp-footer-style-2 tp-footer-style-3 tp-footer-style-4" data-bg-color="#F5F5F5" style={{ backgroundColor: `rgb(245, 245, 245)` }}>
          <div className="tp-footer-top pt-95 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="tp-footer-widget footer-col-4-1 mb-50">
                    <div className="tp-footer-logo">
                      <Link href="/">
                      <Logo/>

                      </Link>
                    </div>
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-talk mb-20">
                        <span>Got Questions? Call us</span>
                        <h4><a href="tel:01613-634246">01613-634246</a></h4>
                      </div>
                      <div className="tp-footer-contact">
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon">
                            <span>
                              <Mail size={16} />
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p><a href="mailto:storyofjo2020@gmail.com">storyofjo2020@gmail.com</a></p>
                          </div>
                        </div>
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon" style={{position: 'relative', left: '-2px'}}>
                            <span>
                              <MapPin size={20} />
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p><a href="https://www.google.com/maps/place/Sleepy+Hollow+Rd,+Gouverneur,+NY+13642,+USA/@44.3304966,-75.4552367,17z/data=!3m1!4b1!4m6!3m5!1s0x4cccddac8972c5eb:0x56286024afff537a!8m2!3d44.3304928!4d-75.453048!16s%2Fg%2F1tdsjdj4" target="_blank">House: 1243 (Lift 2), Road: 10, Avenue: 2 Mirpur DOHS Mirpur, Dhaka-1216</a></p>
                          </div>
                        </div>
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon" style={{position: 'relative', left: '-2px'}}>
                            <span>
                              <Timer size={20}/>
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p><a href="#">Opening Time: 11.00 am - 8.00 pm Everyday</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="tp-footer-widget footer-col-4-2 mb-50">
                    <h4 className="tp-footer-widget-title">My Account</h4>
                    <div className="tp-footer-widget-content">
                      <ul>
                      {/* <li><Link href="/track">Track Orders</Link></li> */}
                      <li><Link href="/shipping-and-delivery">Shipping</Link></li>
                      <li><Link href="/wishlist">Wishlist</Link></li>
                      <li><Link href="/profile">My Account</Link></li>
                      <li><Link href="/return-exchange">Returns</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-4 col-sm-5">
                  <div className="tp-footer-widget footer-col-4-3 mb-50">
                    <h4 className="tp-footer-widget-title">Infomation</h4>
                    <div className="tp-footer-widget-content">
                      <ul>
                      <li><Link href="/album">Album</Link></li>
                      <li><Link href="/policy">Privacy Policy</Link></li>
                      <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                      <li><Link href="/blog">Latest News</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                      <li><Link href="/faq"  >FAQ</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="tp-footer-widget footer-col-4-4 mb-50">
                    <h4 className="tp-footer-widget-title">Subscribes</h4>
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-subscribe">
                        <p>Our conversation is just getting started</p>
                        <div className="tp-footer-subscribe-form mb-30">
                          <form onSubmit={handleSubmit}>
                            <div className="tp-footer-subscribe-input">
                              <input ref={emailRef} type="email" placeholder="Enter Your Email" />
                              <button type="submit">Subscribes</button>
                            </div>
                          </form>
                          {message && <p>{message}</p>}
                        </div>
                        <div className="tp-footer-social-4 tp-footer-social">
                          <h4 className="tp-footer-social-title-4">Follow Us On</h4>
                          {social_data?.map(s => <a href={s.link} key={s.id} target="_blank">
                            <i className={s.icon}></i>
                          </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-footer-bottom">
            <div className="container">
              <div className="tp-footer-bottom-wrapper">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="tp-footer-copyright">
                      <p>© {new Date().getFullYear()} All Rights Reserved.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tp-footer-payment text-md-end">
                      <p>
                        <Image src={pay} alt="pay" className='payment_img'  width={'auto'} height={'auto'}/>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;