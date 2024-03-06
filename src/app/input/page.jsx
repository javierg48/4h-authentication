// ./src/app/input/page.jsx
import Section1Form from "@/components/Section1Form";

export default function Home() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Section 1: Involvement Summary</h1>
      <p>Please fill in the form below</p>

      <Section1Form />
    </div>
  );
}