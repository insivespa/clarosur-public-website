import styled from "styled-components";

const tokens = {
  // Layout
  maxContentWidth: "68rem",

  // Surfaces & borders
  surface: "rgba(255,255,255,0.08)",
  surfaceHover: "rgba(255,255,255,0.12)",
  border: "rgba(255,255,255,0.18)",

  // Text
  textOnDark: "white",
  placeholderOnDark: "rgba(255, 255, 255, 0.55)",

  // Backgrounds / gradients / overlays
  heroOverlay: "rgba(0,0,0,0.55)",
  heroGradientStart: "#0f3d87",
  heroGradientMid: "#0b2c63",
  heroGradientEnd: "#071f45",
  titleGradientStart: "#ffffff",
  titleGradientEnd: "#cfe8ff",

  // Primary & states
  primary: "#0066CC",
  primaryHover: "#005AB4",
  ring: "#3BA0FF",
  error: "#FFB02E",

  // Input backgrounds
  inputBg: "rgba(255, 255, 255, 0.06)",
  inputBgHover: "rgba(255, 255, 255, 0.08)",

  // Shadows / effects
  cardShadow: "rgba(0, 0, 0, 0.3)",
  cardFocusShadow: "rgba(0, 0, 0, 0.34)",
  cardInnerHighlight: "rgba(255, 255, 255, 0.06)",
  focusRingShadow: "rgba(59, 160, 255, 0.35)",
  errorRingShadow: "rgba(255, 176, 46, 0.25)",
  buttonShadow: "rgba(0, 0, 0, 0.28)",
  buttonHoverShadow: "rgba(0, 0, 0, 0.32)",
};

export const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr; /* left narrower (form), right wider (text) */
  gap: 5rem;
  padding: 3rem 10rem;
  background: ${({ bgimage }) =>
    bgimage
      ? `linear-gradient(180deg, ${tokens.heroOverlay}, ${tokens.heroOverlay}),
         url(${bgimage}) center/cover no-repeat`
      : `linear-gradient(135deg, ${tokens.heroGradientStart} 0%, ${tokens.heroGradientMid} 60%, ${tokens.heroGradientEnd} 100%)`};
  color: ${tokens.textOnDark};
  isolation: isolate;

  & > * {
    max-width: ${tokens.maxContentWidth};
    width: 100%;
  }

  & > :first-child {
    grid-column: 1;
  }
  & > :last-child {
    grid-column: 2;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 2rem 6rem;

    /* Make title/description come first */
    & > :last-child {
      grid-column: auto;
      order: 1; /* text */
      display: grid;
      justify-items: center;
    }
    & > :first-child {
      grid-column: auto;
      order: 2; /* form */
    }
  }

  @media (max-width: 992px) {
    gap: 1.5rem;
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 2rem 1rem;
  }
`;

/* ======= Typography ======= */
export const Title = styled.div`
  margin-bottom: clamp(0.5rem, 1.5vw, 1rem);
  text-wrap: stable;

  h1 {
    margin: 0 0 clamp(0.25rem, 1vw, 0.75rem) 0;
    font-size: clamp(1.75rem, 3.5vw + 0.5rem, 3.25rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    font-weight: 800;
    background: linear-gradient(
      90deg,
      ${tokens.titleGradientStart} 0%,
      ${tokens.titleGradientEnd} 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  p {
    margin: 0;
    font-size: clamp(1rem, 1.2vw + 0.5rem, 2rem);
    line-height: 1.5;
    opacity: 0.95;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: clamp(1.8rem, 6vw, 2.25rem);
    }
    p {
      font-size: clamp(1.2rem, 4vw, 1.25rem);
    }
  }
`;

/* ======= Keyword “chips” ======= */
export const KeywordWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2.5rem 0 0 0;

  display: flex;
  flex-direction: column;
  max-width: 70%;
  gap: clamp(0.5rem, 1.2vw, 0.75rem);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 1.25rem;
  }
`;

export const Keyword = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.8rem;
  border-radius: 999px;
  background: ${tokens.surface};
  border: 1px solid ${tokens.border};
  backdrop-filter: saturate(140%) blur(8px);
  -webkit-backdrop-filter: saturate(140%) blur(8px);

  transition: background 150ms ease, transform 150ms ease;

  &:hover {
    background: ${tokens.surfaceHover};
    transform: translateY(-1px);
  }

  img {
    width: 22px;
    height: 22px;
    filter: invert(1) opacity(0.9);
  }

  :where(p, span) {
    margin: 0;
    font-weight: 600;
    letter-spacing: 0.01em;
  }
`;

/* ======= Form Card ======= */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1.2vw, 0.9rem);
  padding: clamp(1rem, 2.5vw, 2rem);
  border-radius: 18px;

  background: ${tokens.surface};
  border: 1px solid ${tokens.border};
  box-shadow: 0 10px 30px ${tokens.cardShadow},
    0 1px 0 ${tokens.cardInnerHighlight} inset;
  backdrop-filter: blur(12px) saturate(130%);
  -webkit-backdrop-filter: blur(12px) saturate(130%);

  &:focus-within {
    box-shadow: 0 12px 34px ${tokens.cardFocusShadow},
      0 0 0 2px ${tokens.ring} inset;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.125rem, 1vw + 0.75rem, 1.5rem);
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  p {
    margin: 0.25rem 0 0 0;
    font-size: clamp(0.95rem, 0.6vw + 0.75rem, 1.0625rem);
    opacity: 0.9;
  }
`;

/* ======= Inputs ======= */
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;

  .label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  label {
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  input,
  textarea {
    padding: 0.75rem 0.9rem;
    font-size: 0.975rem;
    font-family: inherit;

    color: ${tokens.textOnDark};
    background: ${tokens.inputBg};
    border: 1px solid ${tokens.border};
    border-radius: 10px;

    outline: none;
    transition: border-color 140ms ease, box-shadow 140ms ease,
      background 140ms ease;

    &::placeholder {
      color: ${tokens.placeholderOnDark};
    }

    &:hover {
      background: ${tokens.inputBgHover};
    }

    &:focus-visible {
      border-color: ${tokens.ring};
      box-shadow: 0 0 0 3px ${tokens.focusRingShadow};
    }

    &.input-error {
      border-color: ${tokens.error};
      box-shadow: 0 0 0 3px ${tokens.errorRingShadow};
    }
  }

  .error-message {
    color: ${tokens.error};
    font-size: 0.75rem;
    margin-left: 0.5rem;
    min-height: 1.1em;
    visibility: hidden;
    white-space: nowrap;

    &.visible {
      visibility: visible;
    }
  }
`;

export const TextArea = styled.textarea`
  resize: vertical;
  min-height: 120px;
  max-height: 150px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  margin-top: 0.25rem;

  button {
    width: 100%;
    padding: 12px 10px;
    border-radius: 5px;
    border: none;
    border-radius: 999px;

    background: ${tokens.primary};
    color: ${tokens.textOnDark};
    font-weight: 600;
    font-size: 1rem;

    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease,
      background 120ms ease;

    box-shadow: 0 10px 20px ${tokens.buttonShadow},
      0 0 0 0 ${tokens.buttonShadow};

    &:hover {
      background: ${tokens.primaryHover};
      transform: translateY(-1px);
      box-shadow: 0 14px 26px ${tokens.buttonHoverShadow};
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 8px 16px ${tokens.buttonShadow} inset;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      filter: grayscale(10%);
    }
  }
`;
