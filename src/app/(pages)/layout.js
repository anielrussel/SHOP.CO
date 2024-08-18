import React from "react";
import Navbar from "../../components/page/Navbar";
import Footer from "../../components/page/Footer";

export default function PagesLayout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
