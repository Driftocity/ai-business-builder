import BusinessForm from "../components/BusinessForm";

export default function Page() {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>AI Business Builder</h1>
      <p>Turn any idea into a ready-to-launch business in seconds.</p>
      <BusinessForm />
    </main>
  );
}
