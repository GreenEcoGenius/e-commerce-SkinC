'use client';
        import type { NextPage } from 'next';
import { useState } from 'react';
import TestimonialWrapper from "./testimonial-wrapper";
import styles from './testimonials-section.module.css';

export type TestimonialsSectionType = {
  className?: string;
}



const TestimonialsSection: NextPage<TestimonialsSectionType> = ({ className="" }) => {
const [testimonialWrapperItems] = useState([
  {
    saraJ: "Sara J.",
    theFaceTonerHasTransformed: "“The Face Toner has transformed my morning routine with its natural hydration. Highly recommend!"",
    image: "/Image16@2x.png",
    imageIconMaxHeight: "100%" as const,
    imageIconHeight: undefined,
    faceToner: "Face Toner"
  },
  {
    saraJ: "Helen D.",
    theFaceTonerHasTransformed: ""The Body Serum left my skin silky smooth after just one use. It’s become my go-to for a natural glow every day!"",
    image: "/Image15@2x.png",
    imageIconMaxHeight: undefined,
    imageIconHeight: undefined,
    faceToner: "Body Serum"
  },
  {
    saraJ: "Kim W.",
    theFaceTonerHasTransformed: ""This Face Mask is a game-changer! My skin feels rejuvenated and looks brighter—perfect for a quick self-care moment."",
    image: "/Image12@2x.png",
    imageIconMaxHeight: "unset" as const,
    imageIconHeight: "50px" as const,
    faceToner: "Face Mask"
  }
]);
  return (
    <section className={[styles.testimonialsSection, className].join(' ')}>
      <h2 className={styles.testimonials}>Testimonials</h2>
      <div className={styles.categoryWrapper}>{testimonialWrapperItems.map((item, index) => (<TestimonialWrapper
        key={index}
        saraJ={item.saraJ}
theFaceTonerHasTransformed={item.theFaceTonerHasTransformed}
image={item.image}
imageIconMaxHeight={item.imageIconMaxHeight}
imageIconHeight={item.imageIconHeight}
faceToner={item.faceToner}
        
        
      />))}
      </div>
    </section>);
};

export default TestimonialsSection ;