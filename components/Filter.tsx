import styles from "./Filter.module.css";

type FilterGroupProps = {
  label: string;
  options?: string[];
  variants?: string[];
};

function FilterGroup({ label, options, variants }: FilterGroupProps) {
  return (
    <div className={styles.filterGroup}>
      <div className={styles.accordion}>
        <span className={styles.accordionLabel}>{label}</span>
        <span className={styles.accordionIcon}>&ndash;</span>
      </div>
      {options && (
        <div className={styles.optionList}>
          {options.map((opt) => (
            <label key={opt} className={styles.checkbox}>
              <div className={styles.checkboxIcon} />
              <span className={styles.checkboxLabel}>{opt}</span>
            </label>
          ))}
        </div>
      )}
      {variants && (
        <div className={styles.variants}>
          {variants.map((v) => (
            <span key={v} className={styles.variant}>{v}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Filter() {
  return (
    <aside className={styles.filter}>
      <h3 className={styles.filterTitle}>Filter (0)</h3>
      <FilterGroup label="Ingredients" options={["Hyaluronic acid", "Botanical extracts", "Glycerin", "Caffeine", "Peptides", "Vitamin E"]} />
      <FilterGroup label="Type" options={["Cream", "Lotion", "Serum", "Oil", "Cleanser"]} />
      <FilterGroup label="Price" options={["Under $50", "$100-$150", "Above $200"]} />
      <FilterGroup label="Size" variants={["50 ml", "100 ml", "150 ml", "200 ml", "250 ml"]} />
    </aside>
  );
}
