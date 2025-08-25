"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function Policy() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    if (openSection === sectionNumber) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionNumber);
    }
  };


  const paymentSections = [];
  const content_with_html=`
  <div class="query_container">

<p>The goal is to provide Aarong’s customers with the finest service, while ensuring an effective monitoring policy is implemented at all levels for the sales, exchange, refund, and repair of Jewellery products.</p>

<p><strong><u>Gold</u></strong></p>
<p><strong>&nbsp; &nbsp;Exchange and Refund:</strong></p>
<ul>
<li>Aarong guarantees all its gold Jewellery to be 21 karat gold and provides hallmark on all gold products.</li>
<li>In case of any defect, Aarong will either repair or replace the Jewellery but shall not be responsible for the following:
<ul>
<li>lf the defect is caused by accidental damage, negligence, or improper handling by the customer.</li>
<li>lf the Jewellery has been repaired or modified anywhere else other than Aarong.</li>
</ul>
</li>
</ul>
<ul>
<li>Aarong's original guarantee card must be provided during any transaction or exchange.</li>
<li>Exchange and refund policy will not be applicable for gold nose pins.</li>
<li>Sold products can only be exchanged once within three (3) working days from the date of purchase without any deduction; for any exceptional case approval need to be taken from HOR.</li>
<li>The three-day exchange period only applies in case of exchange but not for refund.</li>
<li>Aarong outlets will provide the exchange or refund facility to the customers immediately if hallmark is available on the Jewellery. In case without hallmark product, seven (7) working days will be required for the verification.</li>
<li>ln case of exchange or refund of Aarong gold Jewellery, the following deductions will be made:
<ul>
<li>12% of current product price for exchange (after 3 working days from date of purchase). Full VAT will be refunded only if the exchange is made within 90 days of purchase.</li>
<li>Customers can purchase a product of same or higher value.</li>
<li>25% of current product price for returned products. Full VAT will be refunded only if the return is made within 90 days of purchase.</li>
</ul>
</li>
</ul>
<ul>
<li>Jewellery boxes do not have to be returned for exchanges or refunds.</li>
<li>Exchange of Jewellery with missing parts or damaged gold Jewellery will not be allowed. However, customers can avail of our repair service on a paid basis.</li>
<li>Gold products can be exchanged for a lifetime at any Aarong outlet with the mentioned applicable deductions.</li>
<li>Customer can replace or return solid bangles but this facility will not be applicable for bangles with gala.</li>
</ul>
<p><strong>&nbsp; &nbsp;Repair Policy:</strong></p>
<ul>
<li>Gold Jewellery can be repaired for 10 years if it is in repairable condition and if the design has not been discontinued by Aarong.</li>
<li>In case of manufacturing defect, Aarong will provide product repair free of cost for 5 days from the date of purchase. If the defect relates to accidental damage, negligence or improper handling by the customer, then repair charges will be applicable.</li>
<li>Customer must preserve the guarantee card to avail the repair service.</li>
<li>Repairing time may vary between 30 to 60 working days.</li>
<li>Repair charges can only be determined and communicated to the customer at the time of delivery of the product.</li>
</ul>
<p><strong><u>Silver</u></strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; Exchange and Refund:</strong></p>
<ul>
<li>ln terms of exchange, the following conditions will be applicable:
<ul>
<li>Products once sold can be exchanged only within seven days from the date of purchase (10% deduction on the current product price for exchange. Full VAT will be refunded).</li>
<li>Customers can purchase a product of same or higher value.</li>
</ul>
</li>
</ul>
<ul>
<li>Products with missing parts will not be exchanged.</li>
<li>Exchange or repair service will not be applicable for silver nose pins.</li>
<li>Refund will not be applicable for silver Jewellery.</li>
</ul>
<p><strong>&nbsp; &nbsp; &nbsp;Repair Policy:</strong></p>
<ul>
<li>Silver Jewellery can be repaired for 10 years if it is in repairable condition and if the design has not been discontinued by Aarong.</li>
<li>Silver Jewellery can be repaired free of charges within 3 working days from the date of purchase.</li>
<li>No repairing facility will be offered for gold-mukhibala.</li>
<li>Gold-plated Jewellery can be polished free of wage within one year from the date of purchase and will be done on a paid basis from that time onwards.</li>
<li>Repairing time may vary between 30 to 60 days.</li>
<li>Repair charges can only be determined and communicated to the customer at the time of delivery of the product.</li>
</ul>
<p><strong><u>Pearl</u></strong></p>
<p><strong>&nbsp; &nbsp; &nbsp;Exchange and Refund:</strong></p>
<ul>
<li>Pearl Products once sold cannot be exchanged or refunded.</li>
</ul>
<p><strong>&nbsp; &nbsp; &nbsp;Repair Policy:</strong></p>
<ul>
<li>Pearl items can be repaired on paid basis within 3 years of purchase if it is in repairable condition. &nbsp;</li>
<li>Additional charges will be applicable for missing pearls.</li>
<li>The color and number of pearls may vary depending on the availability of the pearl in Aarong’s stock.</li>
<li>Repairing time may vary between 30 to 60 days.</li>
<li>Repair charges can only be determined and communicated to the customer at the time of delivery of the product.</li>
</ul>
<p><strong><u>Fashion Jewellery</u></strong></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;Fashion Jewellery once sold cannot be exchanged, refunded or repaired.</p>
<p><strong><u>Diamond</u></strong></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;As per the revised jewelry policy sale, exchange, refund and repair will not be applicable for diamond jewelry products.</p>

</div>
`

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>Policy</span>
      </nav>

      <div className={styles.layout}>
        {/* Sidebar */}
         <SideBarLinks/>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Policy</h1>

          <div className={styles.introText} dangerouslySetInnerHTML={{ __html: content_with_html }} />

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