import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="flex w-full justify-center mt-[115px]">{children}</section>
      <Footer />
    </>
  );
};

export default Layout;
