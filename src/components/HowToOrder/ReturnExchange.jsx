"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function ReturnExchange() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    if (openSection === sectionNumber) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionNumber);
    }
  };




  const content_with_html=`

  <div class="query_container">

<h5>Discount Sales </h5> <p style="text-align:justify"> Please note, items bought on <b> sale or during promotional campaigns</b> cannot be returned or exchanged. All discounted purchases are considered <b>final</b>.</p>



<h5>Exchange Policy </h5> <p style="text-align:justify"> We know that sometimes you buy something that does not work out the way you had hoped, and for that reason we did our best to make an exchange policy that is helpful for you.</p>



<h5>For orders shipped within Bangladesh </h5> <p style="text-align:justify"> If your product isn’t quite what you expected, don’t worry! You can exchange it within 7 days of the purchase date. Here's how:</p>


                <ul style="margin-left: 40px; margin-bottom: 20px;" >
                    <li>You can also <b>return the product directly to the delivery person</b> at the time of delivery if you notice any issues immediately.</li>
                    <li> Items must be <b>unused, unwashed, and in original condition with all tags</b>.</li>
                    <li> You can exchange for any item of <b>equal or higher value</b> (you’ll need to pay the difference if it’s higher).</li>
                </ul>

    `;

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>Return & Exchange Policy</span>
      </nav>

      <div className={styles.layout}>
        {/* Sidebar */}
         <SideBarLinks/>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Return & Exchange Policy</h1>

          <p className={styles.introText}>
            We want you to feel confident when shopping at JO-BD. If something isn’t right with your order, we’re here to make it right. Please read our simple and straightforward return and exchange guidelines below:
          </p>
          <div dangerouslySetInnerHTML={{ __html: content_with_html }} />


        </div>
      </div>
    </div>
  );
}