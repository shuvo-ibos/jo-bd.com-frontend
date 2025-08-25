"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function HowToOrder() {
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
      title: ' Step 1: Select your location',
      content: `Start by choosing where you want your order delivered. This helps us show you the right stock, delivery time, and shipping cost,  whether you're shopping from Bangladesh or overseas.
`
    },
    {
      id: 2,
      title: 'Step 2: Browse items by category',
      content: 'Dive into our collections, from Dhakaiya Jamdani to handloom classics. Filter by fabric, color, or price to discover sarees that match your style. Every piece tells a story; find the one that speaks to you.'
    },
    {
      id: 3,
      title: 'Step 3: Selecting your desired product',
      content: `Click on the product to view detailed photos, material info, and care tips. Happy with your pick? Choose any variation if available, then click “Add to Cart.” You can keep browsing or move to checkout.`
    },
    {
      id: 4,
      title: 'Payment method for deliveries to a shipping address other than Bangladesh',
      content: `We support international orders with secure payment via major credit/debit cards. Shipping charges and delivery time will be shown clearly before you place your order.`
    },
    {
      id: 5,
      title: 'Custom Duties',
      content: `
      <p>If you're ordering from outside Bangladesh, your country may apply <b>customs duties, VAT, or import taxes</b> on your purchase.</p>
      <h5>These charges are:</h5>
      <ul>
        <li> <strong>Not included</strong> in the product or shipping price</li>
        <li> <strong>Collected by your local customs authority</strong> </li>
        <li> <strong>Based on your country’s import rules and thresholds</strong></li>
      </ul>
      `
    }
  ];

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>How To Order</span>
      </nav>

      <div className={styles.layout}>
        {/* Sidebar */}
         <SideBarLinks/>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>How To Order</h1>

          <p className={styles.introText}>
          Your perfect saree is just a few steps away. Here’s how to order from <a target="_blank" style={{ color: 'blue' }} href="http://jo-bd.com">Jo-BD.com </a>

          </p>

          <div className={styles.accordionSections}>
            {paymentSections.map((section) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}