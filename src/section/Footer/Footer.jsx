import React from "react";
import style from "./FooterStyle.module.css";

function Footer() {
  return (
    <section id="footer" className={style.container}>
      <p>
        &#169; 2024 Prithivi Lalchan. <br />
        All right reserved.
      </p>
    </section>
  );
}

export default Footer;
