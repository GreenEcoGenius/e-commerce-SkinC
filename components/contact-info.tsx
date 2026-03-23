"use client";
import type { NextPage } from "next";
import { useState } from "react";
import InputAlt1 from "./input-alt1";
import TextArea from "./text-area";
import Button2 from "./button21";
import styles from "./contact-info.module.css";

export type ContactInfoType = {
  className?: string;
};

const ContactInfo: NextPage<ContactInfoType> = ({ className = "" }) => {
  const [inputAlt1Items] = useState([
    {
      state: "Default" as const,
      placeholder: true,
      icon: false,
      hint: false,
      label: true,
      label1: "First name",
      placeholder1: "John",
      type: "Right" as const,
      showArrow: false,
    },
    {
      state: "Default" as const,
      placeholder: true,
      icon: false,
      hint: false,
      label: true,
      label1: "Last name",
      placeholder1: "Doe",
      type: "Right" as const,
      showArrow: false,
    },
    {
      state: "Default" as const,
      placeholder: true,
      icon: false,
      hint: false,
      label: true,
      label1: "Email address",
      placeholder1: "johndoe@example.com",
      type: "Right" as const,
      showArrow: false,
    },
  ]);
  return (
    <main className={[styles.contactInfo, className].join(" ")}>
      <section className={styles.container}>
        <div className={styles.customerCare}>Customer care</div>
        <div className={styles.rightContent}>
          <div className={styles.row}>
            <div className={styles.text}>
              <div className={styles.customerService}>Customer service</div>
              <div className={styles.supportexamplecom}>
                support@example.com
              </div>
            </div>
            <div className={styles.text2}>
              <div className={styles.customerService}>Complaints</div>
              <div className={styles.supportexamplecom}>info@example.com</div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.text}>
              <div className={styles.customerService}>Phone number</div>
              <div className={styles.phoneDetail}>+1 222 333 4444</div>
            </div>
            <div className={styles.text4}>
              <div className={styles.workingHours}>Working hours</div>
              <div className={styles.customerService}>Monday - Friday</div>
              <div className={styles.customerService}>8am - 5pm</div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.container2}>
        <div className={styles.customerCare}>General inquiry</div>
        <section className={styles.rightContent2}>
          <div className={styles.form}>
            {inputAlt1Items.map((item, index) => (
              <InputAlt1
                key={index}
                state={item.state}
                placeholder={item.placeholder}
                icon={item.icon}
                hint={item.hint}
                label={item.label}
                label1={item.label1}
                placeholder1={item.placeholder1}
                type={item.type}
                showArrow={item.showArrow}
              />
            ))}
            <TextArea state="Default" placeholder={false} hint={false} label />
          </div>
          <Button2 color="Dark" />
        </section>
      </div>
    </main>
  );
};

export default ContactInfo;
