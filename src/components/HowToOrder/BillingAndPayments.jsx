"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function BillingAndPayments() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    if (openSection === sectionNumber) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionNumber);
    }
  };


  const paymentSections = [
    {
      id: 1,
      title: 'For deliveries within Bangladesh',
      content: 'Details about payment options for deliveries within Bangladesh would go here.'
    },
    {
      id: 2,
      title: 'For deliveries to a shipping address other than Bangladesh',
      content: 'Details about payment options for international deliveries would go here.'
    },
    {
      id: 3,
      title: 'Payment method for deliveries within Bangladesh',
      content: 'Specific payment methods available for local deliveries would go here.'
    },
    {
      id: 4,
      title: 'Payment method for deliveries to a shipping address other than Bangladesh',
      content: 'Specific payment methods available for international deliveries would go here.'
    },
    {
      id: 5,
      title: 'Custom Duties',
      content: 'Information about custom duties would go here.'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>Billing & Payments</span>
      </nav>

      <div className={styles.layout}>
        {/* Sidebar */}
         <SideBarLinks/>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Billing & Payments</h1>

          <p className={styles.introText}>
           At Jo, we ensure your payment experience is secure and hassle-free, whether you're ordering from Bangladesh or overseas.

          </p>

          <div className={styles.accordionSections}>
            <div dangerouslySetInnerHTML={{ __html: `

             <h6> For deliveries within Bangladesh:</h6>
<p> You can pay via cash on delivery, bKash, Nagad, or any local debit/credit card. All payments are processed securely for your convenience.</p>

<h6>For deliveries to a shipping address other than Bangladesh:</h6>
<p> Customers abroad can pay using international cards like Visa or Mastercard through our trusted payment gateway.
</p>

<h6>Payment method for deliveries within Bangladesh:</h6>
<p> Choose what suits you best: mobile wallet, card payment, or cash on delivery. It's safe, simple, and very flexible.</p>

<h6>Payment method for deliveries to a shipping address other than Bangladesh:</h6>
<p> All international orders must be prepaid using a valid card. Customs duties or VAT (if applicable) are charged separately by your country.</p>

<h6>Custom Duties:</h6>
<p>If you're ordering from outside Bangladesh, your country may apply <b>customs duties, VAT, or import taxes</b> on your purchase.
These charges are:</p>
<ul>
        <li> <strong>Not included</strong> in the product or shipping price</li>
        <li> <strong>Collected by your local customs authority</strong> </li>
        <li> <strong>Based on your country’s import rules and thresholds</strong></li>
      </ul>

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