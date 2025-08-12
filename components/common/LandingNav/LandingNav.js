import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ContactButtons,
  Logo,
  Nav,
  NavLinks,
  MobileMenuIcon,
  MobileMenu,
  MobileNavLinks,
  CloseIcon,
} from "./style";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";

const LandingNav = ({ landingNav }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo = landingNav?.data?.logo?.url;
  const logourl = landingNav?.data?.logourl?.url || "/";
  const navlinks = landingNav?.data?.navlink || [];
  const callBtn = landingNav?.data?.callbtn;
  const callBtnLink = landingNav?.data?.callbtnlink?.url || "#";

  const isTel =
    typeof callBtnLink === "string" && callBtnLink.startsWith("tel:");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  return (
    <Nav>
      {/* Logo */}
      <Logo>
        <Link href={logourl}>{logo && <img src={logo} alt="Logo" />}</Link>
      </Logo>

      {/* Desktop Navigation Links */}
      <NavLinks>
        {navlinks.map((item, index) => {
          const name = item.text || "Link";
          const href = item.url?.url || "#";
          return (
            <li key={index}>
              {href.startsWith("#") ? (
                <a href={href}>{name}</a>
              ) : (
                <Link href={href}>{name}</Link>
              )}
            </li>
          );
        })}
      </NavLinks>

      {/* Call Button (desktop) */}
      <ContactButtons>
        {isTel ? (
          <a href={callBtnLink} className="contact-btn" aria-label="Call">
            <FiPhone />
            {callBtn}
          </a>
        ) : (
          <Link href={callBtnLink} aria-label="Call">
            <span className="contact-btn">
              <FiPhone />
              {callBtn}
            </span>
          </Link>
        )}
      </ContactButtons>

      {/* Mobile Menu Toggle Icon */}
      <MobileMenuIcon onClick={() => setIsMenuOpen(true)}>
        <FiMenu size={28} />
      </MobileMenuIcon>

      {/* Mobile Fullscreen Slide-in Menu */}
      <MobileMenu isOpen={isMenuOpen}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo>
            <Link href={logourl}>{logo && <img src={logo} alt="Logo" />}</Link>
          </Logo>
          <CloseIcon onClick={() => setIsMenuOpen(false)}>
            <FiX size={28} />
          </CloseIcon>
        </div>

        <MobileNavLinks>
          {navlinks.map((item, index) => {
            const name = item.text || "Link";
            const href = item.url?.url || "#";
            return (
              <li key={index} onClick={() => setIsMenuOpen(false)}>
                <Link href={href}>{name}</Link>
              </li>
            );
          })}

          {/* Mobile Call Button */}
          <li onClick={() => setIsMenuOpen(false)}>
            {isTel ? (
              <a href={callBtnLink} className="contact-btn" aria-label="Call">
                <FiPhone />
                {callBtn}
              </a>
            ) : (
              <Link href={callBtnLink} aria-label="Call">
                <span className="contact-btn">
                  <FiPhone />
                  {callBtn}
                </span>
              </Link>
            )}
          </li>
        </MobileNavLinks>
      </MobileMenu>
    </Nav>
  );
};

export default LandingNav;
