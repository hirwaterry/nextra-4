import { Metadata } from "next";
import Hero from "./components/Hero";
import Text from "./components/Text"

export const metadata: Metadata = {
  title: "BoDx",
  description: "BoDx v1 is here.",
};
export default function Home() {
  return (
    <div className="poppins">
      <Hero />
    </div>
  );
}
