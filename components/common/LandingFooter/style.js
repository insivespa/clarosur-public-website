import styled from "styled-components";

const colors = {
  footerBackground: "#393b37",
  footerText: "#ffffff",
  footerLink: "#19bcd4",
  footerBottomText: "#e9ecef",
  footerBottomBorder: "#d3d6d8",
};

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
  padding: 1rem 10rem;
  background-color: ${colors.footerBackground};

  .footer-columns {
    display: contents;
  }

  .footer-title {
    color: ${colors.footerText};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 0.75rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${colors.footerBottomBorder};
    width: 100%;
    text-align: center;
  }

  .footer-top {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    .footer-logo {
      max-width: 200px;
      margin-bottom: 2rem;
    }

    .footer-description {
      text-align: justify;
      width: 70%;
      font-size: 1rem;
      color: ${colors.footerText};
    }
  }

  .footer-nav {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    width: 100%;
    margin: 2rem 0 0;
    text-align: center;

    .nav-item {
      width: 100%;
      a {
        color: ${colors.footerLink};
        text-decoration: none;
        font-size: 1rem;
      }

      a:hover,
      a:focus-visible {
        text-decoration: underline;
        outline: none;
      }

      p,
      span,
      div {
        color: ${colors.footerText};
        margin: 0;
        text-align: center;
      }
    }
  }

  .footer-contacts {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    max-width: 360px;
    margin: 2rem 0 0 auto;
    text-align: center;

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      justify-content: center;

      .contact-icon {
        width: 30px;
        height: 30px;
        margin-right: 1rem;
        filter: invert(1);
        flex-shrink: 0;
      }

      a {
        color: ${colors.footerLink};
        text-decoration: none;
      }

      a:hover,
      a:focus-visible {
        text-decoration: underline;
        outline: none;
      }

      p,
      span,
      div {
        color: ${colors.footerText};
        margin: 0;
        text-align: center;
      }
    }
  }

  .footer-bottom {
    margin-top: 2rem;
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    font-size: 0.875rem;
    color: ${colors.footerBottomText};
    border-top: 1px solid ${colors.footerBottomBorder};
    padding-top: 1rem;
    text-align: center;
  }

  @media (max-width: 1024px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    text-align: center;

    .footer-title {
      text-align: center;
      width: 100%;
    }

    .footer-top {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      .footer-description {
        width: 100%;
      }
    }

    .footer-nav {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      align-items: center;
      width: 100%;
      margin: 1rem 0 0;
    }

    .footer-contacts {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      align-items: center;
      max-width: 100%;
      margin: 1rem 0 0;
    }

    .footer-bottom {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
      margin-top: 0;
    }
  }
`;
