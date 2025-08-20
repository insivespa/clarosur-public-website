import styled from "styled-components";

const navBgColor = "#fff";
const navLinkColor = "#393b37";
const navLinkHoverColor = "#19bcd4";
const navLinkUnderlineColor = "#19bcd4";
const mobileMenuIconColor = "#393b37";
const mobileMenuBgColor = "#ffffff";
const closeIconColor = "#393b37";
const mobileNavLinkColor = "#393b37";
const contactBtnBgColor = "#19bcd4";
const contactBtnTextColor = "#ffffff";
const contactBtnIconColor = "#ffffff";
const contactBtnBgHover = "rgba(25, 188, 212, 0.12)";
const contactBtnBg = "rgba(25, 188, 212, 0.08)";
const contactBtnBorder = "rgba(25, 188, 212, 0.2)";
const contactBtnText = "#0f4c54";
const contactBtnIcon = "#0f4c54";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: ${navBgColor};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  img {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5rem;

  li a {
    position: relative;
    text-decoration: none;
    color: ${navLinkColor};
    font-size: 1.05rem;
    font-weight: 500;
    padding-bottom: 4px;
    transition: all 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
      background: ${navLinkUnderlineColor};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${navLinkHoverColor};
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 1160px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 1160px) {
    display: block;
    cursor: pointer;
    color: ${mobileMenuIconColor};
    z-index: 1100;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${mobileMenuBgColor};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.15);
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  padding: 1rem;
  z-index: 2000;
`;

export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  color: ${closeIconColor};
`;

export const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 2rem 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  li a {
    position: relative;
    text-decoration: none;
    color: ${mobileNavLinkColor};
    font-weight: 500;
    padding-bottom: 4px;
    transition: all 0.3s ease;
  }

  .contact-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 12px 18px;
    background: ${contactBtnBgColor};
    color: ${contactBtnTextColor};
    border-radius: 6px;
    font-weight: 500;
    text-decoration: none;

    svg {
      font-size: 1rem;
      color: ${contactBtnIconColor};
    }
  }
`;

export const Logo = styled.div`
  img {
    width: 200px;
    object-fit: contain;
  }

  @media (max-width: 1160px) {
    img {
      width: 150px;
    }
  }
`;

export const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1160px) {
    display: none;
  }

  .contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 10px 18px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 500;

    background: ${contactBtnBg};
    border: 1px solid ${contactBtnBorder};
    backdrop-filter: saturate(140%) blur(8px);
    -webkit-backdrop-filter: saturate(140%) blur(8px);

    color: ${contactBtnText};
    svg {
      font-size: 1rem;
      color: ${contactBtnIcon};
      transition: color 0.3s ease;
    }

    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
      background: ${contactBtnBgHover};
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08) inset;
    }
  }
`;
