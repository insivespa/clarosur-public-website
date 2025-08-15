import styled from "styled-components";

const colors = {
  footerBackground: "#0b3954",
  footerText: "#ffffff",
  footerLink: "#0070f3",
  footerBottomText: "#cccccc",
  footerBottomBorder: "#dddddd",
};

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
  padding: 1rem 10rem;
  background-color: ${colors.footerBackground};

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

  .footer-contacts {
    margin-top: 2rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      max-width: 300px;
      justify-content: start;

      .contact-icon {
        width: 30px;
        height: 30px;
        margin-right: 1rem;
      }

      a {
        color: ${colors.footerLink};
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      p,
      span,
      div {
        color: ${colors.footerText};
      }
    }
  }

  .footer-bottom {
    margin-top: 2rem;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    font-size: 0.875rem;
    color: ${colors.footerBottomText};
    border-top: 1px solid ${colors.footerBottomBorder};
    padding-top: 1rem;
    text-align: center;
  }

  /* Mobile styles */
  @media (max-width: 1200px) {
    padding: 2rem 6rem;
  }

  @media (max-width: 992px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    text-align: center;

    .footer-top {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      .footer-description {
        width: 100%;
      }
    }

    .footer-contacts {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      align-items: start;
    }

    .footer-bottom {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      margin-top: 0;
    }
  }
`;
