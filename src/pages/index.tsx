import logo from "../assets/shinjitsu-dm-s.png";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/footer";
import Typewriter from "../components/Typewriter";

export default function Home() {
  return (
    <div className="container">
      <div className="video-background">
        <div className="video-overlay"></div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LUmgrve1sZc?si=ncMEPksD4Ta2WQWL&autoplay=1&mute=1&controls=0&loop=1&playlist=LUmgrve1sZc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Shinjitsu</title>
      </Head>

      <Image src={logo} alt="Logo" width={150} height={150} className="logo" />
      <div className="typewriter">
        <Typewriter />
      </div>
      <a
        href="https://blog.patrickskinner.tech/shinjitsu-whitepaper"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="whitepaper-button">Whitepaper</button>
      </a>
      <Footer />
    </div>
  );
}
