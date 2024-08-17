import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function ({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
