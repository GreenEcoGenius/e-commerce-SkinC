import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function SizeGuidePage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Size Guide</h1>
        <p className={styles.note}>All measurements are in centimeters. Our fit is relaxed contemporary. Size down for a tighter fit.</p>

        <h2 className={styles.tableTitle}>T-Shirts &amp; Tops</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead><tr><th>Size</th><th>Chest</th><th>Length</th><th>Shoulder</th></tr></thead>
            <tbody>
              <tr><td>XS</td><td>86</td><td>66</td><td>42</td></tr>
              <tr><td>S</td><td>92</td><td>68</td><td>44</td></tr>
              <tr><td>M</td><td>98</td><td>70</td><td>46</td></tr>
              <tr><td>L</td><td>104</td><td>72</td><td>48</td></tr>
              <tr><td>XL</td><td>110</td><td>74</td><td>50</td></tr>
              <tr><td>2XL</td><td>116</td><td>76</td><td>52</td></tr>
              <tr><td>3XL</td><td>122</td><td>78</td><td>54</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className={styles.tableTitle}>Hoodies &amp; Sweatshirts</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead><tr><th>Size</th><th>Chest</th><th>Length</th><th>Sleeve</th></tr></thead>
            <tbody>
              <tr><td>XS</td><td>90</td><td>64</td><td>60</td></tr>
              <tr><td>S</td><td>96</td><td>66</td><td>62</td></tr>
              <tr><td>M</td><td>102</td><td>68</td><td>64</td></tr>
              <tr><td>L</td><td>108</td><td>70</td><td>66</td></tr>
              <tr><td>XL</td><td>114</td><td>72</td><td>68</td></tr>
              <tr><td>2XL</td><td>120</td><td>74</td><td>70</td></tr>
              <tr><td>3XL</td><td>126</td><td>76</td><td>72</td></tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
