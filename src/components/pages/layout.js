import React from "react";
import { Outlet, Link } from "react-router-dom";
import IMAGE from "../images/image";
import Footer from "../../components/properties/footer";
import HeaderNav from "../properties/headerNav";
import { Helmet } from "react-helmet";

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>
          BEST LABZ - SAAS Applicatoin | ERP & CRM Solutions | POS Billing
          Software | E-Commerce
        </title>
        <meta
          name="description"
          content="Do you need a digital enterprise application? Best Labz provides solutions for SaaS-based applications, booking applications, e-commerce applications, and more."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.bestabzglobal.com/" />

        {/* Optional: Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "Itboomi",
            url: "https://www.bestabzglobal.com/",
            // logo: "https://itboomi.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91 7708545098",
              contactType: "Customer Service",
            },
          })}
        </script>
        {/* Add other default meta tags here */}
      </Helmet>
      <HeaderNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
