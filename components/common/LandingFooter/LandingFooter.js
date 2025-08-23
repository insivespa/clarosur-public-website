import Link from "next/link";
import { useCallback } from "react";
import { PrismicRichText } from "@prismicio/react";
import { Footer } from "./style";

const LandingFooter = ({ landingFooter }) => {
  const logo = landingFooter?.data?.logo?.url;
  const description = landingFooter?.data?.description || [];
  const copyright = landingFooter?.data?.copyright || [];
  const contactItems = landingFooter?.data?.contactgroup || [];
  const navLinks = landingFooter?.data?.navlinks || [];

  const handleScroll = useCallback((e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const isHash = (href) => typeof href === "string" && href.startsWith("#");
  const isTel = (href) => typeof href === "string" && href.startsWith("tel:");
  const isMail = (href) =>
    typeof href === "string" && href.startsWith("mailto:");

  return (
    <Footer>
      <div className="footer-top">
        {logo && <img src={logo} alt="Footer Logo" className="footer-logo" />}
        <div className="footer-description">
          <PrismicRichText field={description} />
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-nav">
          <h3 className="footer-title">Contenido del Sitio</h3>
          {navLinks.map((item, index) => {
            const href = item.link?.url;

            if (!href) {
              return (
                <div className="nav-item" key={index}>
                  <PrismicRichText field={item.nav} />
                </div>
              );
            }

            if (isHash(href)) {
              return (
                <div className="nav-item" key={index}>
                  <a href={href} onClick={(e) => handleScroll(e, href)}>
                    <PrismicRichText field={item.nav} />
                  </a>
                </div>
              );
            }

            return (
              <div className="nav-item" key={index}>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <PrismicRichText field={item.nav} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="footer-contacts">
          <h3 className="footer-title">Datos</h3>
          {contactItems.map((item, index) => {
            const href = item.url?.url;

            return (
              <div className="contact-item" key={index}>
                {item.icon?.url && (
                  <img
                    src={item.icon.url}
                    alt="Icon"
                    className="contact-icon"
                  />
                )}

                {href ? (
                  isMail(href) || isTel(href) ? (
                    <a href={href}>
                      <PrismicRichText field={item.label} />
                    </a>
                  ) : (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <PrismicRichText field={item.label} />
                    </a>
                  )
                ) : (
                  <PrismicRichText field={item.label} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer-bottom">
        <PrismicRichText field={copyright} />
      </div>
    </Footer>
  );
};

export default LandingFooter;
