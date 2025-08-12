import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { Footer } from "./style";

const LandingFooter = ({ landingFooter }) => {
  const logo = landingFooter?.data?.logo?.url;
  const description = landingFooter?.data?.description || [];
  const copyright = landingFooter?.data?.copyright || [];
  const contactItems = landingFooter?.data?.contactgroup || [];

  return (
    <Footer>
      {/* Logo & Description */}
      <div className="footer-top">
        {logo && <img src={logo} alt="Footer Logo" className="footer-logo" />}
        <div className="footer-description">
          <PrismicRichText field={description} />
        </div>
      </div>

      {/* Contact Items */}
      <div className="footer-contacts">
        {contactItems.map((item, index) => (
          <div className="contact-item" key={index}>
            {item.icon?.url && (
              <img src={item.icon.url} alt="Icon" className="contact-icon" />
            )}
            {item.url?.url ? (
              <Link href={item.url.url}>
                <a>
                  <PrismicRichText field={item.label} />
                </a>
              </Link>
            ) : (
              <PrismicRichText field={item.label} />
            )}
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <PrismicRichText field={copyright} />
      </div>
    </Footer>
  );
};

export default LandingFooter;
