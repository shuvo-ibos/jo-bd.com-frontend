"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function TrackOrders() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    if (openSection === sectionNumber) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionNumber);
    }
  };



  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>Track Your Order</span>
      </nav>

      <div className={styles.layout}>
        {/* Sidebar */}
         <SideBarLinks/>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Track Your Order</h1>

          <p className={styles.introText}>
          Tracking your JO-BD order is quick and easy!
          </p>

          <div className={styles.accordionSections}>
              <div dangerouslySetInnerHTML={{__html: `

                <h6>1. Via Contact Us Form</h6>
                <ul style="margin-left: 40px; margin-bottom: 20px;" >
                    <li>Go to our Contact Us page.</li>
                    <li>From the <b>Topic</b> dropdown menu, select <b>Online Orders.</b></li>
                    <li>Enter your <b>Order Number</b> in the required field.</li>
                    <li>Submit the form - our support team will get back to you shortly.</li>
                </ul>
                <h6>2. For Registered Users</h6>
                <ul style="margin-left: 40px; margin-bottom: 20px;" >
                    <li>Log in to your JO-BD account.</li>
                    <li>Go to <b>My Account > Order History</b> to view the real-time status of your orders.</li>
                </ul>
                <h6>3. By Phone or Email</h6>
                <p>Need immediate assistance? We’re here to help:</p>
                <ul style="margin-left: 40px; margin-bottom: 20px;" >
                    <li><b>Call</b> us at <b>(+88) 01613-634246</b></li>
                    <li> (Available <b>7 days a week, 10:00 AM – 8:00 PM</b>)</li>
                    <li> <b>Email:</b> storyofjo2020@gmail.com</li>
                </ul>



                `}} />
          </div>
        </div>
      </div>
    </div>
  );
}