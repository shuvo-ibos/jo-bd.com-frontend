"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function TermsConditions() {
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
  <div class="cms-custom-design">
<p><br>Aarong is a social enterprise of BRAC, the world’s largest NGO, and Aarong and its sub-brands - Taaga, Taaga Man, HERSTORY by Aarong, and Aarong Earth - are registered brands represented in this virtual shop. The purposes of this site are to provide online delivery services to its customers and general information about the brands. This page outlines the basic rules that govern the use of our site. Your use of aarong.com constitutes your agreement to follow and be bound by the terms listed below. If you do not agree to these terms, please do not use this site. Your use of this site binds you to the following terms:</p>
<p>Aarong may revise this agreement at any time, therefore you should visit this page periodically to review the terms of your use. Should you have any questions concerning any of our policies, please&nbsp; <a href="https://www.aarong.com/contact/">contact us</a>.</p>

<h2><strong>I. Product Information</strong></h2>
<p><br><span>Keep in mind, in consideration to laws of Bangladesh on shippable items, fragility and other constraints aarong.com does not carry every item that you would find at our shops. The prices displayed on the website are quoted in Bangladeshi Taka (Tk.) at our local webstore and converted into other currencies for each respective country webstore where we offer delivery. Aarong products displayed on the website may also be available in select Aarong stores in Bangladesh while supplies last. In some cases, merchandise shown online may not be available in stores. Stores may also have different prices or promotional events at different times. Sale prices on the website are Internet-only specials, and do not reflect the pricing of Bangladesh stores. The pricing in international shops differ from our local pricing to reflect the costs of doing business in those respective regions. </span></p>

<p><strong>i. Handcrafted</strong></p>
<p><span>Aarong products are handcrafted therefore we cannot guarantee that the product you see online and the purchased product will be exactly the same though every effort is made for it to be a very close match.</span></p>

<p><strong>ii. Product Availability</strong></p>
<p><span>Please understand that items featured on this website are handcrafted and therefore in limited quantities and, because of their limited availability and nature of production, stock may not be replenished. That means once an item is sold out, it may not be available in the future and therefore may not appear on the website again. When an item featured on aarong.com is no longer in stock, we make every attempt to remove that item from the website in a timely manner. However, there are instances due to product handling that a product will not meet our quality standards for shipment and therefore may ultimately be unavailable for delivery. Should you have any questions concerning the availability of a particular item, please contact us at <link> 9am – 5pm Bangladesh standard time.</span></p>

<p><strong>iii. Colours</strong></p>
<p><span>We have made every effort to represent each product colour as accurately as possible on the website. However, due to monitor discrepancies of personal computer/laptop/tablet/hand-held devices, we cannot guarantee that your display of colour will be accurate.
</span></p>

<p><strong>iv. Pricing</strong></p>
<p><span>In the event an Aarong product is listed at an incorrect price due to a system error, typographical error or error in pricing information, Aarong shall have the right to refuse or cancel any orders placed for product listed at the incorrect price.</span></p>

<p><span>All our product prices and services are subject to tax as applicable by laws of Bangladesh.</span></p>


<p><strong>v. Payment and Credit Note</strong></p>
<p><span>Aarong shall have the right to refuse or cancel any orders whether or not the order has been confirmed within 14 working days from the date of your order placement. If your credit/debit card or mobile banking wallet has already been charged for the purchase and your order is canceled, Aarong shall issue a credit note or refund the charged amount. &nbsp;</span>&nbsp;</p>


<p><strong>vi. Shipping and Processing Fees</strong></p>
<p><span>Our shipping and processing charges are intended to compensate designated shipping companies in addition to covering the cost of processing your order, handling and packaging the purchased products and delivering them to you. The risk of loss or damage of packaged items are passed onto our shipping partners, and you will be compensated for the full value of the items should they not reach you at all or in its original state.</span></p>

<p>As part of Aarong's terms and conditions, please read our &nbsp;<a href="https://www.aarong.com/shipping-and-delivery/">shipping policy</a> and <a href="https://www.aarong.com/returns-and-exchanges/">return policy</a> for your convenience.</p>

<p>For international orders, customs duties and taxes may apply.&nbsp;<a href="https://www.aarong.com/customs-duty/">Learn more.</a></p>

<h2><strong>II. Inaccuracy Disclaimer</strong></h2>
<p><br><span>From time to time there may be information on our website or in our newsletter that contains typographical errors, inaccuracies, or omissions that may relate to product descriptions, pricing, and availability. Aarong reserves the right to correct any errors, inaccuracies or omissions and to change or update information at any time without prior notice (including after you have submitted your order).</span></p>

<p><span>We make every effort to present the most recent, most accurate, and most reliable information on our website at all times. However, there may be occasions when some of the information featured on aarong.com may contain incomplete data, typographical errors, or inaccuracies.  Any errors are wholly unintentional and we apologise if erroneous information is reflected in the merchandise price, item availability, or in any other way that affects your individual order. Be aware that we present our content 'as is' and make no claims to its accuracy, either expressed or implied. We reserve the right to amend errors or to update product information at any time without prior notice.</span></p>

<h2><strong>III. Legal Information</strong></h2>
<p><br><span>This website is expressly owned and operated by Aarong. Unless otherwise noted, all design and content featured on aarong.com-including navigational buttons and images, logos, artwork, icons, graphics, photography, text, and the like are copyrights, trademarks, trade dress, and/or intellectual property that are owned, controlled, or licensed by Aarong. This website in its entirety is protected by copyright and applicable trade dress and is protected under Bangladesh and international copyright laws. All worldwide rights, titles, and interests are reserved.</span></p>

<p><span>The contents of our website and the website as a whole are intended solely for your personal, non-commercial use.  Any use of our website and its content for purposes other than personal is prohibited without the prior written permission of Aarong.  Do not reproduce, publish, display, modify, sell, or distribute any of the materials from Aarong. You may, however, download or electronically copy and print any of the page contents displayed on the site, but please remember that these are available for your personal, non-commercial use only.  Should you choose to download, copy, or forward any site materials via email, no right, title, or interest in those materials will be transferred to you.</span></p>

<p><span><strong>Any dispute or claim relating in any way to your use of aarong.com, or to any product or service distributed by Aarong will be subject to the laws of Bangladesh and will be resolved by binding arbitration under the Arbitration Act of 2001 of Bangladesh. If necessary, the dispute may be submitted to a court of law under the jurisdiction of Bangladesh. &nbsp; &nbsp; &nbsp;</strong></span></p>

<p><span><strong>i. Limitation of Liability</strong></span></p>
<p><span>Given the unpredictability of technology, internet connectivity and the online environment, Aarong does not warrant that the function or operation of this website will be uninterrupted or error-free, that defects will be corrected, or that this site or the server that makes it available will be free of viruses or other harmful elements. As a visitor to and user of this website, you must assume full responsibility for any costs associated with the servicing of equipment used in connection with the use of our website. As a visitor to and a user of this website, you, in effect, agree that your access will be subject to the terms and conditions set forth in this legal notice and that access is undertaken at your own risk. Aarong shall not be liable for damages of any kind related to your use of or inability to access this website. Aarong will not be responsible for any fraud, theft or mistake in the usage of your credit card in the online purchase of any Aarong item. &nbsp;</span></p>

<p><strong>ii. Indemnification</strong></p>
<p><span>You agree to indemnify, defend, and hold harmless Aarong, its officers, directors, employees, agents, licensors and suppliers (collectively the "Service Providers") from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of these terms and conditions or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the site using your Internet account.</span></p>

<h2><strong>IV. Correspondence and Communications</strong></h2>
<p><br><span>Although we will make every effort to respond quickly to applicable email messages, aarong.com is under no obligation to respond to all pieces of correspondence received through this site, or to maintain your submitted comments in confidence, or to pay compensation of any kind for your comments or submissions. While we welcome your comments and feedback regarding aarong.com, our merchandise and our services, we do not wish to receive any confidential or proprietary ideas, suggestions, materials, or information via this website or any email connection. All your comments, feedback, ideas, suggestions, and other submissions that are disclosed or submitted to our organisation through aarong.com shall become and remain the property of Aarong. Any such disclosure or submission by you is a declaration of the full release of all proprietary claims and/or intellectual rights regarding your submission. However, we will not use your name in connection with any such materials, information, suggestions, ideas or comments unless we first obtain your permission or otherwise are required by law to do so.</span></p>

<p><strong>i. My Aarong Rewards</strong></p>
<p><span>For the details and terms of use for accessing our customer loyalty programmes, please visit &nbsp;<a href="https://www.aarong.com/my-aarong-rewards/">My Aarong Rewards</a> and <a href="https://www.aarong.com/club-taaga/">Club Taaga</a>.<span></span></span></p>

<p><strong>ii. Careers</strong></p>
<p><span>Aarong would not be held liable for loss of any data technical or otherwise, information, particulars supplied by job applicants due to force majeure. We will not sell or share any of your details to a third party.</span></p>

<p><strong>iii. Social Media Contests</strong></p>
<p><span>For the details and terms of our latest social media contests, please visit the Rules &amp; Regulations of that particular contest or contact us for more information.</span></p>

<p><span>Learn more about our <a href="https://www.aarong.com/aarong-privacy-policy/">Privacy Policy</a>.</span></p>

</div>`

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