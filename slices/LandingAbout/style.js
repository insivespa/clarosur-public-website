import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 10rem;
  background-color: #0066cc;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    padding: 2rem 6rem;
    gap: 1.5rem;
  }

  @media (max-width: 992px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    gap: 1.25rem;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .text-block {
    width: clamp(20rem, 70%, 60rem);
  }

  /* Title styles */
  .text-block h1 {
    font-weight: 900;
    font-size: 3rem;
    color: white;
    margin: 0 0 1rem 0;
    line-height: 1;
  }

  /* Description styles */
  .text-block p {
    color: #f2f2f2;
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
  }
`;

export const VideoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 90%;
    height: auto;
    aspect-ratio: 16 / 9;
    border: none;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    iframe {
      width: 100%;
    }
    width: 100%;
    max-width: 100%;
  }
`;
