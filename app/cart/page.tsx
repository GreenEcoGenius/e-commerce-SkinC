import PageLayout from "../../components/PageLayout";

export default function CartPage() {
  return (
    <PageLayout title="Your bag">
      <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--fs-16)", color: "var(--Gray-3)", letterSpacing: "-0.06em", fontWeight: 500 }}>
        Your bag is empty.
      </p>
    </PageLayout>
  );
}
