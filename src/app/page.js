import Image from "next/image";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Languages from "../components/Languages";
import References from "../components/References";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";

export default function Home() {
  return (
    <main className="container">
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certificates />
      <Languages />
      <References />

    </main>
  );
}
