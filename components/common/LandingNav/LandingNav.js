import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ContactButtons,
  Logo,
  Nav,
  NavLinks,
  MobileMenu,
  MobileNavLinks,
  MobileMenuHeader,
} from "./style";
import { FiPhone } from "react-icons/fi";

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

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                <a href={href} onClick={(e) => handleScroll(e, href)}>
                  {name}
                </a>
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

      {/* Animated Hamburger Menu Icon */}
      <svg
        className={`ham hamRotate ham8 ${isMenuOpen ? "active" : ""}`}
        viewBox="0 0 100 100"
        width="50"
        onClick={toggleMenu}
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>

      {/* Mobile Fullscreen Slide-in Menu */}
      <MobileMenu isOpen={isMenuOpen}>
        <MobileMenuHeader>
          <Logo>
            <Link href={logourl}>{logo && <img src={logo} alt="Logo" />}</Link>
          </Logo>
        </MobileMenuHeader>

        <MobileNavLinks isOpen={isMenuOpen}>
          {navlinks.map((item, index) => {
            const name = item.text || "Link";
            const href = item.url?.url || "#";
            return (
              <li key={index}>
                {href.startsWith("#") ? (
                  <a href={href} onClick={(e) => handleScroll(e, href)}>
                    {name}
                  </a>
                ) : (
                  <Link href={href} onClick={() => setIsMenuOpen(false)}>
                    {name}
                  </Link>
                )}
              </li>
            );
          })}

          {/* Mobile Call Button */}
          <li>
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
