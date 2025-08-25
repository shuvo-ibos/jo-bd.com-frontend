"use client"
import Link from 'next/link';
import React from 'react'
import styles from '../../app/HowToOrder.module.css';
import { usePathname } from 'next/navigation';

export default function SideBarLinks() {
    const pathname = usePathname()

  const sidebarLinks = [
    { title: 'How To Order', href: '/faq' },
    { title: 'Billing & Payments', href: '/billing-and-payments',  },
    { title: 'Shipping & Delivery', href: '/shipping-and-delivery' },
    { title: 'Track Your Orders', href: '/track-orders' },
    { title: 'Return & Exchange', href: '/return-exchange' },
    // { title: 'Policy', href: '/policy' },
    // { title: 'Terms And Conditions', href: '/terms-conditions' },
  ];

  return (
    <div className={styles.sidebar}>
          <div className={styles.sidebarNav}>
            {sidebarLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${styles.sidebarLink} ${pathname===link.href ? styles.active : ''}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
  )
}
