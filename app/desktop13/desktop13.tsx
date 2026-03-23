import type { NextPage } from "next";
import Image from "next/image";
import styles from "./desktop13.module.css";

const Desktop13: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <header className={styles.checkoutNavigation}>
        <div className={styles.skinclinicLogo}>
          <Image
            className={styles.vectorIcon}
            loading="lazy"
            width={120}
            height={18.4}
            sizes="100vw"
            alt=""
            src="/Vector.svg"
          />
        </div>
        <a
          className={styles.bag}
          href="https://www.figma.com/design/XfNVMn9MjuEwh4RiYjLxM6?node-id=69-11395"
          target="_blank"
        >
          Bag
        </a>
      </header>
      <main className={styles.checkoutContainer}>
        <div className={styles.leftContent}>
          <div className={styles.fullFormWrapper}>
            <div className={styles.expressCheckoutButtons}>
              <div className={styles.expressCheckout}>Express checkout</div>
              <div className={styles.expressCheckoutOptions}>
                <button className={styles.blockExpressCheckoutWal}>
                  <div className={styles.shoppaylogo}>
                    <div className={styles.shoppay}>
                      <Image
                        className={styles.shoppayIcon}
                        width={32.6}
                        height={21}
                        sizes="100vw"
                        alt=""
                        src="/shopPay.svg"
                      />
                      <div className={styles.shoplogo}>
                        <Image
                          className={styles.shoplogoChild}
                          width={51.8}
                          height={21.2}
                          sizes="100vw"
                          alt=""
                          src="/Group-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.blockExpressCheckoutWal2}>
                  <Image
                    className={styles.logoIcon}
                    width={48.2}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/Logo4.svg"
                  />
                </button>
                <button className={styles.blockExpressCheckoutWal3}>
                  <Image
                    className={styles.logoIcon2}
                    width={78.2}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/Logo3@2x.png"
                  />
                </button>
                <div className={styles.blockExpressCheckoutWal4}>
                  <Image
                    className={styles.paddingmarginGroupIcon}
                    width={96}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/Padding-margin-group1.svg"
                  />
                  <Image
                    className={styles.logoIcon3}
                    width={50.9}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/Logo2.svg"
                  />
                </div>
                <div className={styles.blockExpressCheckoutWal5}>
                  <Image
                    className={styles.logoIcon4}
                    width={86}
                    height={30}
                    sizes="100vw"
                    alt=""
                    src="/Logo.svg"
                  />
                </div>
                <div className={styles.blockExpressCheckoutWal6}>
                  <Image
                    className={styles.logoIcon5}
                    width={85}
                    height={16.1}
                    sizes="100vw"
                    alt=""
                    src="/Logo1.svg"
                  />
                </div>
                <div className={styles.blockExpressCheckoutWal7}>
                  <Image
                    className={styles.logoIcon6}
                    width={48.2}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/Logo4.svg"
                  />
                  <Image
                    className={styles.paddingmarginGroupIcon2}
                    width={96}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/Padding-margin-group1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.form}>
              <h3 className={styles.contact}>Contact</h3>
              <div className={styles.inputAlt}>
                <div className={styles.label}>Label</div>
                <div className={styles.input}>
                  <input
                    className={styles.placeholder}
                    placeholder="Email or phone number"
                    type="text"
                  />
                  <div className={styles.arrow}>
                    <Image
                      className={styles.arrowRightAltIcon}
                      width={10}
                      height={7.5}
                      sizes="100vw"
                      alt=""
                      src="/arrow-right-alt.svg"
                    />
                  </div>
                </div>
                <div className={styles.hintText}>Hint text</div>
              </div>
              <div className={styles.checkbox}>
                <input className={styles.checkboxIcon} type="checkbox" />
                <div className={styles.checkboxLabel}>
                  Email me with news and offers
                </div>
              </div>
            </div>
            <section className={styles.form2}>
              <h3 className={styles.delivery}>Delivery</h3>
              <div className={styles.inputs}>
                <div className={styles.inputAlt2}>
                  <div className={styles.label2}>Label</div>
                  <div className={styles.input}>
                    <div className={styles.showOrderSummary}>
                      Country/region
                    </div>
                    <div className={styles.chevron}>
                      <Image
                        className={styles.keyboardArrowDownIcon}
                        width={7.5}
                        height={4.5}
                        sizes="100vw"
                        alt=""
                        src="/keyboard-arrow-down.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.label}>Hint text</div>
                </div>
                <div className={styles.row}>
                  <div className={styles.inputAlt3}>
                    <div className={styles.label}>Label</div>
                    <div className={styles.input}>
                      <input
                        className={styles.placeholder}
                        placeholder="First name (optional)"
                        type="text"
                      />
                      <div className={styles.arrow}>
                        <Image
                          className={styles.keyboardArrowDownIcon2}
                          width={7.5}
                          height={4.5}
                          sizes="100vw"
                          alt=""
                          src="/keyboard-arrow-down.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText}>Hint text</div>
                  </div>
                  <div className={styles.inputAlt3}>
                    <div className={styles.label}>Label</div>
                    <div className={styles.input}>
                      <input
                        className={styles.placeholder}
                        placeholder="Last name"
                        type="text"
                      />
                      <div className={styles.arrow}>
                        <Image
                          className={styles.keyboardArrowDownIcon2}
                          width={7.5}
                          height={4.5}
                          sizes="100vw"
                          alt=""
                          src="/keyboard-arrow-down.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText}>Hint text</div>
                  </div>
                </div>
                <div className={styles.inputAlt}>
                  <div className={styles.label}>Label</div>
                  <div className={styles.input}>
                    <input
                      className={styles.placeholder}
                      placeholder="Address"
                      type="text"
                    />
                    <div className={styles.arrow}>
                      <Image
                        className={styles.keyboardArrowDownIcon2}
                        width={7.5}
                        height={4.5}
                        sizes="100vw"
                        alt=""
                        src="/keyboard-arrow-down.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.hintText}>Hint text</div>
                </div>
                <div className={styles.inputAlt}>
                  <div className={styles.label}>Label</div>
                  <div className={styles.input}>
                    <input
                      className={styles.placeholder}
                      placeholder="Apartment, suite, etc (optional)"
                      type="text"
                    />
                    <div className={styles.arrow}>
                      <Image
                        className={styles.keyboardArrowDownIcon2}
                        width={7.5}
                        height={4.5}
                        sizes="100vw"
                        alt=""
                        src="/keyboard-arrow-down.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.hintText}>Hint text</div>
                </div>
                <div className={styles.row}>
                  <div className={styles.inputAlt7}>
                    <div className={styles.label}>Label</div>
                    <div className={styles.input}>
                      <input
                        className={styles.placeholder7}
                        placeholder="City"
                        type="text"
                      />
                      <div className={styles.chevron6}>
                        <Image
                          className={styles.keyboardArrowDownIcon2}
                          width={7.5}
                          height={4.5}
                          sizes="100vw"
                          alt=""
                          src="/keyboard-arrow-down.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText}>Hint text</div>
                  </div>
                  <div className={styles.inputAlt8}>
                    <div className={styles.label2}>Label</div>
                    <div className={styles.input}>
                      <div className={styles.showOrderSummary}>Province</div>
                      <div className={styles.chevron7}>
                        <Image
                          className={styles.keyboardArrowDownIcon2}
                          width={7.5}
                          height={4.5}
                          sizes="100vw"
                          alt=""
                          src="/keyboard-arrow-down.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.label}>Hint text</div>
                  </div>
                  <div className={styles.inputAlt3}>
                    <div className={styles.label}>Label</div>
                    <div className={styles.input}>
                      <input
                        className={styles.placeholder7}
                        placeholder="Postal code"
                        type="text"
                      />
                      <div className={styles.chevron8}>
                        <Image
                          className={styles.keyboardArrowDownIcon2}
                          width={7.5}
                          height={4.5}
                          sizes="100vw"
                          alt=""
                          src="/keyboard-arrow-down.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText}>Hint text</div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.form2}>
              <h3 className={styles.delivery}>Shipping method</h3>
              <div className={styles.methods}>
                <div className={styles.radio}>
                  <input className={styles.radiobutton} type="radio" />
                  <div className={styles.text}>
                    <div className={styles.expressCheckout}>
                      Post Expedited Parcel
                    </div>
                    <div className={styles.to7Business}>
                      1 to 7 business days
                    </div>
                  </div>
                  <div className={styles.priceWrapper}>
                    <div className={styles.prices}>$10.00</div>
                  </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.radio}>
                  <input className={styles.radiobutton} type="radio" />
                  <div className={styles.text}>
                    <div className={styles.expressCheckout}>
                      Post Xpresspost
                    </div>
                    <div className={styles.to7Business}>
                      1 to 3 business days
                    </div>
                  </div>
                  <div className={styles.priceWrapper}>
                    <div className={styles.expressCheckout}>$15.00</div>
                  </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.radio}>
                  <input className={styles.radiobutton} type="radio" />
                  <div className={styles.text}>
                    <div className={styles.expressCheckout}>Post Priority</div>
                    <div className={styles.to7Business}>
                      1 to 3 business days
                    </div>
                  </div>
                  <div className={styles.priceWrapper}>
                    <div className={styles.expressCheckout}>$20.00</div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.form2}>
              <h3 className={styles.delivery}>Payment method</h3>
              <div className={styles.methods2}>
                <div className={styles.radio4}>
                  <div className={styles.topText}>
                    <input className={styles.radiobutton} type="radio" />
                    <div className={styles.text4}>
                      <div className={styles.expressCheckout}>Credit card</div>
                    </div>
                  </div>
                  <div className={styles.payments}>
                    <Image
                      className={styles.paymentMethodIcon}
                      width={35}
                      height={24}
                      sizes="100vw"
                      alt=""
                      src="/Payment-Method2@2x.png"
                    />
                    <Image
                      className={styles.paymentMethodIcon2}
                      width={35}
                      height={24}
                      sizes="100vw"
                      alt=""
                      src="/Payment-Method@2x.png"
                    />
                    <div className={styles.paymentMethod2}>
                      <div className={styles.base} />
                      <Image
                        className={styles.lettersIcon}
                        loading="lazy"
                        width={34}
                        height={13.1}
                        sizes="100vw"
                        alt=""
                        src="/letters.svg"
                      />
                    </div>
                    <Image
                      className={styles.paymentMethodIcon2}
                      width={35}
                      height={24}
                      sizes="100vw"
                      alt=""
                      src="/Payment-Method1@2x.png"
                    />
                    <div className={styles.checkboxLabel}>and more...</div>
                  </div>
                </div>
                <div className={styles.cardForm}>
                  <div className={styles.inputAlt}>
                    <div className={styles.label10}>Card number</div>
                    <input className={styles.input10} type="text" />
                    <div className={styles.hintText}>Hint text</div>
                  </div>
                  <div className={styles.inputAlt}>
                    <div className={styles.label10}>Name on card</div>
                    <input className={styles.input10} type="text" />
                    <div className={styles.hintText}>Hint text</div>
                  </div>
                  <div className={styles.row3}>
                    <div className={styles.inputAlt12}>
                      <div className={styles.label12}>Expiration date</div>
                      <div className={styles.input12}>
                        <div className={styles.placeholder10}>MM / YY</div>
                        <div className={styles.chevron8}>
                          <Image
                            className={styles.arrowRightAltIcon2}
                            width={10}
                            height={7.5}
                            sizes="100vw"
                            alt=""
                            src="/arrow-right-alt.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.label}>Hint text</div>
                    </div>
                    <div className={styles.inputAlt13}>
                      <div className={styles.label10}>Security code</div>
                      <input className={styles.input10} type="text" />
                      <div className={styles.hintText}>Hint text</div>
                    </div>
                  </div>
                </div>
                <div className={styles.radio5}>
                  <input className={styles.radiobutton} type="radio" />
                  <Image
                    className={styles.paymentMethodsIcon}
                    loading="lazy"
                    width={86}
                    height={23}
                    sizes="100vw"
                    alt=""
                    src="/Payment-Methods@2x.png"
                  />
                </div>
              </div>
            </section>
            <section className={styles.form2}>
              <div className={styles.inputAlt}>
                <h3 className={styles.delivery}>Billing address</h3>
                <div className={styles.selectTheAddress}>
                  Select the address that matches your card of payment method.
                </div>
              </div>
              <div className={styles.methods}>
                <div className={styles.radio6}>
                  <input className={styles.radiobutton} type="radio" />
                  <div className={styles.text4}>
                    <div className={styles.expressCheckout}>
                      Same as shipping address
                    </div>
                  </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.radio6}>
                  <input className={styles.radiobutton} type="radio" />
                  <div className={styles.text4}>
                    <div className={styles.expressCheckout}>
                      Use a different billing address
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className={styles.form6}>
              <h3 className={styles.delivery}>Remember me</h3>
              <div className={styles.methods}>
                <div className={styles.radio6}>
                  <input className={styles.checkbox3} type="checkbox" />
                  <div className={styles.text4}>
                    <div className={styles.expressCheckout}>
                      Save my information for faster checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.buttonLabel}>Pay now</div>
            </button>
            <div className={styles.divider} />
            <div className={styles.links}>
              <div className={styles.checkboxLabel}>Return policy</div>
              <div className={styles.checkboxLabel}>Terms of service</div>
              <div className={styles.checkboxLabel}>Privacy policy</div>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.fullSummaryWrapper}>
            <div className={styles.productsWrapper}>
              <div className={styles.product}>
                <div className={styles.image}>
                  <div className={styles.badge}>
                    <div className={styles.badgeText}>1</div>
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.leftSideText}>
                    <div className={styles.expressCheckout}>Face Toner</div>
                    <div className={styles.to7Business}>100 ml</div>
                  </div>
                  <div className={styles.price}>
                    <div className={styles.priceValue}>$47.99</div>
                  </div>
                </div>
              </div>
              <div className={styles.product}>
                <div className={styles.image2}>
                  <div className={styles.badge}>
                    <div className={styles.badgeText}>1</div>
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.leftSideText}>
                    <div className={styles.bodySerum}>Body Serum</div>
                    <div className={styles.faceToner2}>Face Toner</div>
                    <div className={styles.to7Business}>100 ml</div>
                  </div>
                  <div className={styles.price}>
                    <div className={styles.checkboxLabel}>$44.99</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divider5} />
            <div className={styles.textWrapper}>
              <div className={styles.row4}>
                <div className={styles.checkboxLabel}>Subtotal (2 items)</div>
                <div className={styles.amountsValues}>$92.98</div>
              </div>
              <div className={styles.row4}>
                <div className={styles.checkboxLabel}>Shipping</div>
                <div className={styles.div4}>$10.00</div>
              </div>
              <div className={styles.row4}>
                <div className={styles.checkboxLabel}>Tax</div>
                <div className={styles.div4}>$5.00</div>
              </div>
            </div>
            <div className={styles.divider6} />
            <div className={styles.row7}>
              <div className={styles.total}>Total</div>
              <h3 className={styles.total2}>Total</h3>
              <h3 className={styles.totalPrice}>$107.98</h3>
            </div>
            <div className={styles.dropdown}>
              <div className={styles.arrow}>
                <Image
                  className={styles.keyboardArrowDownIcon2}
                  width={7.5}
                  height={4.5}
                  sizes="100vw"
                  alt=""
                  src="/keyboard-arrow-down.svg"
                />
              </div>
              <div className={styles.showOrderSummary}>Show order summary</div>
              <div className={styles.chevron}>
                <Image
                  className={styles.keyboardArrowDownIcon2}
                  width={7.5}
                  height={4.5}
                  sizes="100vw"
                  alt=""
                  src="/keyboard-arrow-down.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.orderSummaryDropdown}>
          <div className={styles.topButton}>
            <div className={styles.leftContent2}>
              <Image
                className={styles.localMallIcon}
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/local-mall.svg"
              />
              <div className={styles.total}>Hide order summary</div>
              <div className={styles.showOrderSummary2}>Show order summary</div>
              <div className={styles.chevron11}>
                <Image
                  className={styles.keyboardArrowUpIcon}
                  width={11.3}
                  height={6.7}
                  sizes="100vw"
                  alt=""
                  src="/keyboard-arrow-up.svg"
                />
                <Image
                  className={styles.keyboardArrowDownIcon11}
                  width={11.3}
                  height={6.7}
                  sizes="100vw"
                  alt=""
                  src="/keyboard-arrow-down.svg"
                />
              </div>
            </div>
            <div className={styles.div6}>$107.98</div>
          </div>
          <div className={styles.productsWrapper2}>
            <div className={styles.productsWrapper3}>
              <div className={styles.product3}>
                <div className={styles.image3}>
                  <div className={styles.badge3}>
                    <div className={styles.badgeText3}>1</div>
                  </div>
                </div>
                <div className={styles.productInfo3}>
                  <div className={styles.leftSideText3}>
                    <div className={styles.ml3}>100 ml</div>
                    <div className={styles.faceToner3}>Face Toner</div>
                  </div>
                  <div className={styles.price3}>
                    <div className={styles.div7}>$47.99</div>
                  </div>
                </div>
              </div>
              <div className={styles.product3}>
                <div className={styles.image4}>
                  <div className={styles.badge3}>
                    <div className={styles.badgeText3}>1</div>
                  </div>
                </div>
                <div className={styles.productInfo4}>
                  <div className={styles.leftSideText3}>
                    <div className={styles.bodySerum2}>Body Serum</div>
                    <div className={styles.ml4}>100 ml</div>
                    <div className={styles.faceToner4}>Face Toner</div>
                  </div>
                  <div className={styles.price4}>
                    <div className={styles.div7}>$44.99</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divider7} />
            <div className={styles.productsWrapper3}>
              <div className={styles.row8}>
                <div className={styles.div7}>Subtotal (2 items)</div>
                <div className={styles.div9}>$92.98</div>
              </div>
              <div className={styles.row8}>
                <div className={styles.div7}>Shipping</div>
                <div className={styles.div9}>$10.00</div>
              </div>
              <div className={styles.row8}>
                <div className={styles.div7}>Tax</div>
                <div className={styles.div9}>$5.00</div>
              </div>
            </div>
            <div className={styles.divider7} />
            <div className={styles.row11}>
              <div className={styles.div7}>Total</div>
              <div className={styles.div9}>$107.98</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Desktop13;
