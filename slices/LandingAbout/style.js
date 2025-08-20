import styled from "styled-components";

const colors = {
  wrapperBg: "#19bcd4",
  titleText: "#ffffff",
  descriptionText: "#e9ecef",
};

export const Wrapper = styled.section`
  --pad-x: 10rem;
  --pad-y: 4rem;

  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: var(--pad-y) var(--pad-x);
  background-color: ${colors.wrapperBg};
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    --pad-x: 6rem;
    --pad-y: 2rem;
    padding: var(--pad-y) var(--pad-x);
    gap: 1.5rem;
  }

  @media (max-width: 992px) {
    --pad-x: 1rem;
    --pad-y: 2rem;
    padding: var(--pad-y) var(--pad-x);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    --pad-x: 1rem;
    --pad-y: 2rem;
    padding: var(--pad-y) var(--pad-x);

    gap: 2.5rem;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;

  .text-block {
    width: clamp(20rem, 70%, 60rem);
  }

  .text-block h1 {
    font-weight: 900;
    font-size: 3rem;
    color: ${colors.titleText};
    margin: 0 0 1rem 0;
    line-height: 1;
  }

  .text-block p {
    color: ${colors.descriptionText};
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: justify;
    margin: 0;
  }

  @media (max-width: 768px) {
    margin: 1rem;

    .text-block {
      width: 100%;
    }

    .text-block h1 {
      font-size: 1.5rem;
    }
    .text-block p {
      line-height: 1.5;
      font-size: 1rem;
    }

    margin-bottom: 1.5rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;

  margin-right: calc(-1 * var(--pad-x));
  margin-top: calc(-1 * var(--pad-y));
  margin-bottom: calc(-1 * var(--pad-y));

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-left: calc(-1 * var(--pad-x));
    margin-right: calc(-1 * var(--pad-x));
    margin-top: calc(-1 * var(--pad-y));
    margin-bottom: calc(-1 * var(--pad-y));

    img {
      width: 100%;
      height: auto;
      border-radius: 10px 10px 0 0;
    }
  }
`;
