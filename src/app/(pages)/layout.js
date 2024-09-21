"use client";

import React from "react";
import Navbar from "../../components/page/Navbar";
import Footer from "../../components/page/Footer";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export default function PagesLayout({ children }) {
  return (
    <main>
      <Provider store={store}>
        <Navbar />
        {children}
        <Footer />
      </Provider>
    </main>
  );
}
