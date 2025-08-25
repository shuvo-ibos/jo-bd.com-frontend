"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function ShippingAndDelivery() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    if (openSection === sectionNumber) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionNumber);
    }
  };


//   const paymentSections = [
//     {
//       id: 1,
//       title: 'Location based product catalogue',
//       content: `Our product offering and catalogues vary based on your intended delivery location. Customers can select the country product catalogue based on their intended shipping address from the top menu bar (see image below).`
//     },
//     {
//       id: 2,
//       title: 'Shipping methods',
//       content: `Once the item leaves our warehouse, the shipping method you choose on the checkout page determines how quickly your shipped item(s) is delivered to your doorstep.`
//     },
//     {
//       id: 3,
//       title: 'Shipping categories',
//       content: `<div>
//       Standard Shipping (within Bangladesh): within 3-4 days inside Dhaka, within 4-7 days outside Dhaka.
//       </div>
// <div>
// Express Shipping (only Dhaka city): within 24-48 hours (only Dhaka city), not applicable for Lawn and Gardening items.
// </div>
// <div>
// International Shipping (outside of Bangladesh): within 7-10 business days.
// </div>
// `
//     },
//     {
//       id: 4,
//       title: 'Shipping cost',
//       content: `
//       <div class="answer">
//                         <style>
//                             td, th {
//                               border: 1px solid #dddddd;
//                               text-align: left;
//                               padding: 8px;
//                             }

//                             tr:nth-child(even) {
//                               background-color: #dddddd;
//                             }
//                         </style>
//                         <table>
//                             <tbody><tr>
//                               <th>Shipping categories</th>
//                               <th>Shipping time</th>
//                               <th>Shipping cost</th>
//                             </tr>
//                             <tr>
//                               <td>Standard shipping (within Dhaka)</td>
//                               <td> Estimated 3-4 business days</td>
//                               <td>BDT 80*</td>
//                             </tr>

//                             <tr>
//                               <td>Standard shipping (outside of Dhaka)</td>
//                               <td>Estimated 4-7 business days</td>
//                               <td>BDT 100*</td>
//                             </tr>


//                            <tr>
//                               <td>Lawn &amp; Gardening Standard shipping (within Dhaka City only)</td>
//                               <td> Estimated 4-7 business days</td>
//                               <td>BDT 120*</td>
//                             </tr>
//                             <tr>
//                                <td>Express shipping (within Dhaka metropolitan area), not applicable for Lawn and Gardening items</td>
//                               <td>24-48 hours</td>
//                               <td>*150</td>

//                             </tr>

//                             <tr>
//                               <td>International shipping</td>
//                               <td>Estimated 7-10 business days</td>
//                               <td>Please see Shipping and Delivery for international locations for detail</td>
//                             </tr>
//                         </tbody></table>

//                         <br><p><strong>*Note:</strong></p>

//                        <p><strong>For multiple shipments of a split order,</strong> Shipping charge will be divided among the multiple invoices as per the individual invoice value. Total shipping charge against the order will remain same and will be as per our policy.</p>

//                        <p>For standard shipping within Bangladesh the cost is for the first 1 (one) kg. Once the weight of order crosses the limit, you will be charged Tk. 40 for each additional kg.</p>

//                       <p>For Lawn &amp; Gardening products within Dhaka city the cost is for the first product (one). For every additional product added
//                              to your bag, you will be charged Tk. 80 per product.</p>

//                     </div>
//                     `
//     },

//   ];

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>SHIPPING AND DELIVERY</span>
      </nav>

      <div className={styles.layout}>
        {/* Sidebar */}
         <SideBarLinks/>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>SHIPPING AND DELIVERY</h1>

          <p className={styles.introText}>
          We deliver across Bangladesh and selected international locations. While we currently don’t operate physical outlets, our online store brings your favorite sarees right to your doorstep, wherever you are.
          </p>

          <div className={styles.accordionSections}>
            <div dangerouslySetInnerHTML={{ __html: `
              <h6>Location-based product catalogue:</h6>
<p>Depending on where you're shopping from, available products and delivery options may vary. Make sure to select your location first for the most accurate catalogue.</p>
<h6>Shipping methods:</h6>
<p>We work with trusted local and international couriers to ensure your package arrives safely and on time. Tracking details are shared once your order is dispatched.</p>
<h6>Shipping categories:</h6>
<p>Orders are processed based on item availability and destination. Delivery times may differ for local and international shipments.</p>
<h6>Shipping cost:</h6>
<p>Shipping charges are calculated at checkout based on your location and order weight. For international orders, additional customs duties may apply, which are payable by the customer.</p>


` }} />
            {/* {paymentSections.map((section) => (
              <div key={section.id} className={styles.accordionItem}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className={styles.accordionButton}
                >
                  <h3 className={styles.accordionTitle}>
                    {section.title}
                  </h3>
                  <Plus size={24} />
                </button>

                {openSection === section.id && (
                  <div className={styles.accordionContent}>
                   <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </div>
                )}
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}