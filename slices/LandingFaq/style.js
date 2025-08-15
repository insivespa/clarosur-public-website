import styled from "styled-components";

const colors = {
  wrapperBackground: "#ffffff",
  iconLine: "#333333",
  iconLineOpen: "#ffffff",
  titleText: "#3962e9",
  faqBorder: "#dddddd",
  faqActiveBackground: "#3962e9",
  faqActiveText: "#ffffff",
};

export const Wrapper = styled.div`
  background-color: ${colors.wrapperBackground};
  padding: 2rem 10rem;

  @media (max-width: 1200px) {
    padding: 2rem 6rem;
  }

  @media (max-width: 992px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Icon = styled.span`
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  min-width: 1rem;
  min-height: 1rem;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${colors.iconLine};
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  /* horizontal line */
  &::before {
    top: 50%;
    left: 0;
    right: 0;
    height: 0.2rem;
    transform: translateY(-50%);
  }

  /* vertical line */
  &::after {
    left: 50%;
    top: 0;
    bottom: 0;
    width: 0.2rem;
    transform-origin: center;
    transform: translateX(-50%) rotate(0deg);
    opacity: 1;
  }

  /* when open (minus) */
  &.open::after {
    transform: translateX(-50%) rotate(90deg);
    opacity: 0;
  }

  &.open::before {
    background-color: ${colors.iconLineOpen};
  }

  @media (max-width: 768px) {
    width: 1.25rem;
    height: 1.25rem;
    min-width: 1.25rem;
    min-height: 1.25rem;

    &::before {
      height: 0.25rem;
    }

    &::after {
      width: 0.25rem;
    }
  }
`;

export const FaqSection = styled.section`
  .title h1 {
    font-size: 2rem;
    text-align: center;
    color: ${colors.titleText};
    margin-top: 0;
  }

  .faq-item {
    border-bottom: 1px solid ${colors.faqBorder};
    padding: 0.5rem 0;

    &.open .faq-question {
      font-weight: 600;
      background-color: ${colors.faqActiveBackground};
      color: ${colors.faqActiveText};
      border-radius: 5px;
    }
  }

  .faq-question {
    cursor: pointer;
    display: flex;
    gap: 2rem;
    align-items: center;
    font-size: 1.1rem;
    user-select: none;
    padding: 0.5rem;
    p {
      font-weight: bold;
    }
  }

  .faq-answer {
    p {
      padding: 0.5rem;
    }
  }
`;
