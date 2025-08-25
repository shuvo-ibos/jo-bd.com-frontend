'use client';
import React from 'react';
import { CartTwo, Delivery, Discount, Refund, Support } from '@/svg';
import { Headset, ShoppingBag, Truck } from 'lucide-react';

export const feature_data = [
  {
    icon: <Truck />,
    title: 'Inside Dhaka',
    subtitle: 'Within 3 Days, Cash on  Delivery.' ,
    subtitle1: ' '
  },
  {
    icon: <Truck />,
    title: 'Outside Dhaka',
    subtitle: 'Within 5 Days Advanced Payment.',
    subtitle1:""
  },
  {
    icon: <><ShoppingBag /></>,
    title: 'Shipping Charge',
    subtitle: 'For Jo, Delivery Is Free.',
    subtitle1: 'For Lee, Depends On The Product’s Weight.',
  },
  {
    icon: <><Headset /></>,
    title: 'Chat With Us',
    subtitle: 'We Offer Business Hour Chat Support.',
    subtitle1:""
  },
]

const FeatureAreaTwo = () => {
  return (
    <section className={`tp-feature-area tp-feature-border-2 pb-80`}>
      <div className="container">
        <div className="tp-feature-inner-2">
          <div className="row align-items-center">
            {feature_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="tp-feature-item-2 d-flex align-items-start mb-40">
                  <div className="tp-feature-icon-2 mr-10">
                    <span>
                      {item.icon}
                    </span>
                  </div>
                  <div className="tp-feature-content-2">
                    <h3 className="tp-feature-title-2">{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <p>{item.subtitle1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAreaTwo;