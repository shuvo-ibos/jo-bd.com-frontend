'use client'
import React from "react";
import Image from "next/image";
// internal
import ContactForm from "../forms/contact-form";
import contact_icon_1 from "@assets/img/contact/contact-icon-1.png";
import contact_icon_2 from "@assets/img/contact/contact-icon-2.png";
import contact_icon_3 from "@assets/img/contact/contact-icon-3.png";
import { MapPin, MessageCircleMore, Radar } from "lucide-react";

const ContactArea = () => {
  return (
    <>
      <section className="tp-contact-area pb-100">
        <div className="container">
          <div className="tp-contact-inner">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="tp-contact-wrapper">
                  <h3 className="tp-contact-title">Send A Message</h3>

                  <div className="tp-contact-form">
                    {/* form start */}
                    <ContactForm />
                    {/* form end */}
                    <p className="ajax-response"></p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="tp-contact-info-wrapper">
                  <div className="tp-contact-info-item" style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    height:'inherit'
                  }}>
                    <div className="tp-contact-info-icon" style={{margin:'0px'}}>
                      <span>
                        {/* <Image src={contact_icon_1} alt="contact-icon" width={'auto'} height={'auto'} /> */}
                        <MessageCircleMore size={45} />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p data-info="mail">
                        <a href="mailto:storyofjo2020@gmail.com">storyofjo2020@gmail.com</a>
                      </p>
                      <p data-info="phone" >
                        <a href="tel:01613-634246">01613-634246</a>
                      </p>
                    </div>
                  </div>
                  <div className="tp-contact-info-item"  style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    height:'inherit'
                  }}>
                    <div className="tp-contact-info-icon" style={{margin:'0px'}}>
                      <span>
                        <MapPin size={45} />
                        {/* <Image src={contact_icon_2} alt="contact-icon" width={'auto'} height={'auto'} /> */}
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p>
                        <a
                          href="https://www.google.com/maps/place/Mirpur,+Dhaka/@23.8105822,90.3436544,14z/data=!4m6!3m5!1s0x3755c0c1c61277db:0xc7d18838730e2e59!8m2!3d23.8223486!4d90.3654204!16s%2Fm%2F02phghv?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                        >
                          House: 1243 (Lift 2), Road: 10, Avenue: 2 Mirpur DOHS Mirpur, Dhaka-1216
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="tp-contact-info-item" style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    height:'inherit'
                  }}>
                    <div className="tp-contact-info-icon" style={{margin:'0px'}}>
                      <span>
                        <Radar size={45} />
                        {/* <Image src={contact_icon_3} alt="contact-icon" width={'auto'} height={'auto'} /> */}
                      </span>
                    </div>
                    <div className="tp-contact-info-content tp-footer-style-4">
                      <div className="tp-contact-social-wrapper mt-5">
                        <h4 className="tp-contact-social-title">
                          Find on social media
                        </h4>

                        <div className="tp-contact-social-icon">
                          <a href="https://www.facebook.com/exclusivejamdanisaree">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>

                          <a href="https://www.instagram.com/jo_preserving_heritage/">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
