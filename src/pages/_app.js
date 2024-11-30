import "@/styles/globals.css";
import Layout from "@/components/layout.js"
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 120, // default offset
  duration: 400, // durasi animasi
  easing: 'ease-in-out', // efek animasi
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </>
  );
}
