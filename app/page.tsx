import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Border from "@/components/Border";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Feasts from "@/components/Feasts";
import Events from "@/components/Events";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Border />
        <Story />
        <Menu />
        <Feasts />
        <Events />
        <Visit />
      </main>
      <Border />
      <Footer />
    </>
  );
}
