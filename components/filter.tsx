"use client";
import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties } from "react";
import Accordion1 from "./accordion1";
import Checkbox from "./checkbox";
import Variant from "./variant";
import styles from "./filter.module.css";

export type FilterType = {
  className?: string;
  accordionOpen1?: CSSProperties["open"];
  accordionOpen11?: CSSProperties["open"];
  accordionOpen12?: CSSProperties["open"];
  accordionOpen13?: CSSProperties["open"];
  accordionHeader?: string;
  accordionHeader1?: string;
  accordionHeader2?: string;
  accordionHeader3?: string;
  checkboxChecked?: CSSProperties["checked"];
  checkboxChecked1?: CSSProperties["checked"];
  checkboxChecked2?: CSSProperties["checked"];
  checkboxChecked3?: CSSProperties["checked"];
  checkboxChecked4?: CSSProperties["checked"];
  checkboxChecked5?: CSSProperties["checked"];
  checkboxChecked6?: CSSProperties["checked"];
  checkboxChecked7?: CSSProperties["checked"];
  checkboxChecked8?: CSSProperties["checked"];
  checkboxChecked9?: CSSProperties["checked"];
  checkboxChecked10?: CSSProperties["checked"];
  checkboxChecked11?: CSSProperties["checked"];
  checkboxChecked12?: CSSProperties["checked"];
  checkboxChecked13?: CSSProperties["checked"];
  checkboxLabel?: string;
  checkboxLabel1?: string;
  checkboxLabel2?: string;
  checkboxLabel3?: string;
  checkboxLabel4?: string;
  checkboxLabel5?: string;
  checkboxLabel6?: string;
  checkboxLabel7?: string;
  checkboxLabel8?: string;
  checkboxLabel9?: string;
  checkboxLabel10?: string;
  checkboxLabel11?: string;
  checkboxLabel12?: string;
  checkboxLabel13?: string;
  checkboxLabel15?: boolean;
  checkboxLabel16?: boolean;
  checkboxLabel17?: boolean;
  checkboxLabel18?: boolean;
  checkboxLabel19?: boolean;
  checkboxLabel20?: boolean;
  checkboxLabel21?: boolean;
  checkboxLabel22?: boolean;
  checkboxLabel23?: boolean;
  checkboxLabel24?: boolean;
  checkboxLabel25?: boolean;
  checkboxLabel26?: boolean;
  checkboxLabel27?: boolean;
  checkboxIconBackgroundColor?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor1?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor2?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor3?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor4?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor5?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor6?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor7?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor8?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor9?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor10?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor11?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor12?: CSSProperties["backgroundColor"];
  checkboxIconBackgroundColor13?: CSSProperties["backgroundColor"];
  checkboxIconMargin?: CSSProperties["margin"];
  checkboxIconMargin1?: CSSProperties["margin"];
  checkboxIconMargin2?: CSSProperties["margin"];
  checkboxIconMargin3?: CSSProperties["margin"];
  checkboxIconMargin4?: CSSProperties["margin"];
  checkboxIconMargin5?: CSSProperties["margin"];
  checkboxIconMargin6?: CSSProperties["margin"];
  checkboxIconMargin7?: CSSProperties["margin"];
  checkboxIconMargin8?: CSSProperties["margin"];
  checkboxIconMargin9?: CSSProperties["margin"];
  checkboxIconMargin10?: CSSProperties["margin"];
  checkboxIconMargin11?: CSSProperties["margin"];
  checkboxIconMargin12?: CSSProperties["margin"];
  checkboxIconMargin13?: CSSProperties["margin"];
  checkboxIconPadding?: CSSProperties["padding"];
  checkboxIconPadding1?: CSSProperties["padding"];
  checkboxIconPadding2?: CSSProperties["padding"];
  checkboxIconPadding3?: CSSProperties["padding"];
  checkboxIconPadding4?: CSSProperties["padding"];
  checkboxIconPadding5?: CSSProperties["padding"];
  checkboxIconPadding6?: CSSProperties["padding"];
  checkboxIconPadding7?: CSSProperties["padding"];
  checkboxIconPadding8?: CSSProperties["padding"];
  checkboxIconPadding9?: CSSProperties["padding"];
  checkboxIconPadding10?: CSSProperties["padding"];
  checkboxIconPadding11?: CSSProperties["padding"];
  checkboxIconPadding12?: CSSProperties["padding"];
  checkboxIconPadding13?: CSSProperties["padding"];
  variantChecked?: CSSProperties["checked"];
  variantChecked1?: CSSProperties["checked"];
  variantChecked2?: CSSProperties["checked"];
  variantChecked3?: CSSProperties["checked"];
  variantChecked4?: CSSProperties["checked"];
  variantOption?: string;
  variantOption1?: string;
  variantOption2?: string;
  variantOption3?: string;
  variantOption4?: string;

  /** Style props */
  headerMargin?: CSSProperties["margin"];
};

const Filter: NextPage<FilterType> = ({
  className = "",
  headerMargin,
  accordionOpen1,
  accordionOpen11,
  accordionOpen12,
  accordionOpen13,
  accordionHeader,
  accordionHeader1,
  accordionHeader2,
  accordionHeader3,
  checkboxChecked,
  checkboxChecked1,
  checkboxChecked2,
  checkboxChecked3,
  checkboxChecked4,
  checkboxChecked5,
  checkboxChecked6,
  checkboxChecked7,
  checkboxChecked8,
  checkboxChecked9,
  checkboxChecked10,
  checkboxChecked11,
  checkboxChecked12,
  checkboxChecked13,
  checkboxLabel,
  checkboxLabel1,
  checkboxLabel2,
  checkboxLabel3,
  checkboxLabel4,
  checkboxLabel5,
  checkboxLabel6,
  checkboxLabel7,
  checkboxLabel8,
  checkboxLabel9,
  checkboxLabel10,
  checkboxLabel11,
  checkboxLabel12,
  checkboxLabel13,
  checkboxLabel15,
  checkboxLabel16,
  checkboxLabel17,
  checkboxLabel18,
  checkboxLabel19,
  checkboxLabel20,
  checkboxLabel21,
  checkboxLabel22,
  checkboxLabel23,
  checkboxLabel24,
  checkboxLabel25,
  checkboxLabel26,
  checkboxLabel27,
  checkboxIconBackgroundColor,
  checkboxIconBackgroundColor1,
  checkboxIconBackgroundColor2,
  checkboxIconBackgroundColor3,
  checkboxIconBackgroundColor4,
  checkboxIconBackgroundColor5,
  checkboxIconBackgroundColor6,
  checkboxIconBackgroundColor7,
  checkboxIconBackgroundColor8,
  checkboxIconBackgroundColor9,
  checkboxIconBackgroundColor10,
  checkboxIconBackgroundColor11,
  checkboxIconBackgroundColor12,
  checkboxIconBackgroundColor13,
  checkboxIconMargin,
  checkboxIconMargin1,
  checkboxIconMargin2,
  checkboxIconMargin3,
  checkboxIconMargin4,
  checkboxIconMargin5,
  checkboxIconMargin6,
  checkboxIconMargin7,
  checkboxIconMargin8,
  checkboxIconMargin9,
  checkboxIconMargin10,
  checkboxIconMargin11,
  checkboxIconMargin12,
  checkboxIconMargin13,
  checkboxIconPadding,
  checkboxIconPadding1,
  checkboxIconPadding2,
  checkboxIconPadding3,
  checkboxIconPadding4,
  checkboxIconPadding5,
  checkboxIconPadding6,
  checkboxIconPadding7,
  checkboxIconPadding8,
  checkboxIconPadding9,
  checkboxIconPadding10,
  checkboxIconPadding11,
  checkboxIconPadding12,
  checkboxIconPadding13,
  variantChecked,
  variantChecked1,
  variantChecked2,
  variantChecked3,
  variantChecked4,
  variantOption,
  variantOption1,
  variantOption2,
  variantOption3,
  variantOption4,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      margin: headerMargin,
    };
  }, [headerMargin]);

  const [checkboxItems] = useState([
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: "#fff" as const,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Hyaluronic acid",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: undefined,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Botanical extracts",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: undefined,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Glycerin",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: undefined,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Caffeine",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: undefined,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Peptides",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: undefined,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Vitamin E",
    },
  ]);
  const [checkboxItems1] = useState([
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: undefined,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Cream",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: undefined,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Lotion",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: undefined,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Serum",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: undefined,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Oil",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: undefined,
      checkboxIconMargin: undefined,
      checkboxIconPadding: undefined,
      checkboxLabel: "Cleanser",
    },
  ]);
  const [checkboxItems2] = useState([
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: "unset" as const,
      checkboxIconMargin: "0" as const,
      checkboxIconPadding: undefined,
      checkboxLabel: "Under $50",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: "unset" as const,
      checkboxIconMargin: "0" as const,
      checkboxIconPadding: undefined,
      checkboxLabel: "$100-$150",
    },
    {
      checked: false,
      label: true,
      checkboxIconBackgroundColor: "unset" as const,
      checkboxIconMargin: "0" as const,
      checkboxIconPadding: undefined,
      checkboxLabel: "Above $200",
    },
  ]);
  const [variantItems] = useState([
    {
      checked: false,
      option: "50 ml",
    },
    {
      checked: false,
      option: "100 ml",
    },
    {
      checked: false,
      option: "150 ml",
    },
    {
      checked: false,
      option: "200 ml",
    },
    {
      checked: false,
      option: "250 ml",
    },
  ]);
  return (
    <section className={[styles.filter, className].join(" ")}>
      <h3 className={styles.header} style={headerStyle}>
        Filter (0)
      </h3>
      <div className={styles.filterOptions}>
        <div className={styles.filterAccordion}>
          <Accordion1
            open1={accordionOpen1}
            accordionHeader={accordionHeader}
          />
          <div className={styles.list}>
            {checkboxItems.map((item, index) => (
              <Checkbox
                key={index}
                checked={item.checked}
                label={item.label}
                checkboxIconBackgroundColor={item.checkboxIconBackgroundColor}
                checkboxIconMargin={item.checkboxIconMargin}
                checkboxIconPadding={item.checkboxIconPadding}
                checkboxLabel={item.checkboxLabel}
              />
            ))}
          </div>
        </div>
        <div className={styles.filterAccordion}>
          <Accordion1
            open1={accordionOpen11}
            accordionHeader={accordionHeader1}
          />
          <div className={styles.list}>
            {checkboxItems1.map((item, index) => (
              <Checkbox
                key={index}
                checked={item.checked}
                label={item.label}
                checkboxIconBackgroundColor={item.checkboxIconBackgroundColor}
                checkboxIconMargin={item.checkboxIconMargin}
                checkboxIconPadding={item.checkboxIconPadding}
                checkboxLabel={item.checkboxLabel}
              />
            ))}
          </div>
        </div>
        <div className={styles.filterAccordion}>
          <Accordion1
            open1={accordionOpen12}
            accordionHeader={accordionHeader2}
          />
          <div className={styles.list}>
            {checkboxItems2.map((item, index) => (
              <Checkbox
                key={index}
                checked={item.checked}
                label={item.label}
                checkboxIconBackgroundColor={item.checkboxIconBackgroundColor}
                checkboxIconMargin={item.checkboxIconMargin}
                checkboxIconPadding={item.checkboxIconPadding}
                checkboxLabel={item.checkboxLabel}
              />
            ))}
          </div>
        </div>
        <div className={styles.filterAccordion}>
          <Accordion1
            open1={accordionOpen13}
            accordionHeader={accordionHeader3}
          />
          <div className={styles.variants}>
            {variantItems.map((item, index) => (
              <Variant
                key={index}
                checked={item.checked}
                option={item.option}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
