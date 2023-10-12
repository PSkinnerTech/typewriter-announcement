import logo from "../assets/shinjitsu-dm-s.png";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Shinjitsu</title>
      </Head>

      <Image src={logo} alt="Logo" width={150} height={150} className="logo" />
      <div className="typewriter">
        <h1>Shinjitsu is Coming Soon...</h1>
      </div>
      <Footer />
    </div>
  );
}
