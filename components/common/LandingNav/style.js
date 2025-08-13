import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  img {
    filter: invert(1);
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
    color: #4f4c58;
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
      background: #0066cc;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #0066cc;
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
    color: #243c70;
    z-index: 1100;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
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
  color: #243c70;
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
    color: #4f4c58;
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
    background: #0066cc;
    color: white;
    border-radius: 6px;
    font-weight: 500;
    text-decoration: none;

    svg {
      font-size: 1rem;
      color: white;
    }
  }
`;

export const Logo = styled.div`
  img {
    width: 200px;
    height: 30px;
    object-fit: contain;
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

    background: rgba(0, 102, 204, 0.08);
    border: 1px solid rgba(0, 102, 204, 0.2);
    backdrop-filter: saturate(140%) blur(8px);
    -webkit-backdrop-filter: saturate(140%) blur(8px);

    color: #0066cc;
    svg {
      font-size: 1rem;
      color: #0066cc;
      transition: color 0.3s ease;
    }

    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
      background: rgba(0, 102, 204, 0.12);
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08) inset;
    }
  }
`;
