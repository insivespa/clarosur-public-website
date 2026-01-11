import styled from "styled-components";

const colors = {
  primaryBackground: "#19bcd4",
  primaryText: "#ffffff",
  accent: "#1599ac",
};

export const Section = styled.div`
  background-color: ${colors.primaryBackground};
  color: ${colors.primaryText};
  padding: 1rem 10rem;

  @media (max-width: 1200px) {
    padding: 2rem 6rem;
  }

  @media (max-width: 992px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  /* ===== SECTION TITLE ===== */

  .title h1 {
    font-weight: 900;
    font-size: 2rem;
    color: ${colors.primaryText};
    text-align: center;
    margin: 0 0 1rem 0;
  }

  /* ===== DESKTOP TIMELINE ===== */

  .step-wrapper {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 3rem;
    position: relative;
    padding-bottom: 2rem;

    &::before {
      content: "";
      position: absolute;
      top: 20px;
      left: var(--line-left, 40px);
      right: var(--line-right, 40px);
      height: 2px;
      background-color: ${colors.accent};
      z-index: 0;
      transition: left 0.3s ease, right 0.3s ease;
    }
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    /* Step number */
    .step-number {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      color: ${colors.primaryText};
      font-weight: 700;
      font-size: 1.2rem;
      background: ${colors.accent};
      border-radius: 10px;
      margin-bottom: 0.75rem;
    }

    /* Text container */
    .step-text {
      text-align: center;
      max-width: 160px;
      color: ${colors.primaryText};

      .step-title {
        font-weight: 800;
        font-size: 1.05rem;
        margin: 0;
        margin-bottom: 0.2rem;
        line-height: 1.25;
        letter-spacing: 0.2px;

        p {
          margin: 0;
        }
      }

      /* Description */
      .step-description {
        font-size: 0.85rem;
        opacity: 0.9;
        line-height: 1.45;

        p {
          margin: 0;
        }
      }
    }
  }

  /* ===== MOBILE TIMELINE ===== */

  .mobile-step-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
    margin-top: 2rem;
  }

  .mobile-step {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .mobile-step-number {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-weight: 700;
    font-size: 1.3rem;
    color: ${colors.primaryText};
    background-color: ${colors.accent};
    border-radius: 6px;
  }

  .mobile-step-text {
    color: ${colors.primaryText};

    .mobile-step-title {
      font-weight: 800;
      font-size: 1.1rem;
      margin: 0;
      margin-bottom: 0.2rem;
      line-height: 1.3;
      letter-spacing: 0.2px;

      p {
        margin: 0;
      }
    }

    /* Description */
    .mobile-step-description {
      font-size: 0.9rem;
      opacity: 0.9;
      line-height: 1.45;

      p {
        margin: 0;
      }
    }
  }
`;
