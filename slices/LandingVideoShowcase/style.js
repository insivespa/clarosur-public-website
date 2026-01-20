import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 10rem;
  background: ${(props) =>
    props.$isBackgroundVariation ? "#2b2b2b" : "white"};

  @media (max-width: 1024px) {
    padding: 3rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-weight: 900;
    font-size: 2.2rem;
    color: ${(props) => (props.$isBackgroundVariation ? "white" : "#19bcd4")};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const Description = styled.div`
  max-width: 900px;
  margin: 0 auto 3rem auto;
  text-align: justify;
  line-height: 1.7;
  color: ${(props) => (props.$isBackgroundVariation ? "#d1d1d1" : "#333")};
  font-size: 1.05rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

export const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const VideoItem = styled.div`
  flex: 0 0 auto;
  width: ${(props) =>
    props.$orientation === "vertical"
      ? "calc(33.333% - 1.5rem)"
      : "calc(50% - 1rem)"};
  position: relative;
  transition: width 0.3s ease;

  @media (max-width: 1024px) {
    width: ${(props) =>
      props.$orientation === "vertical"
        ? "calc(40% - 1rem)"
        : "calc(50% - 1rem)"};
  }

  @media (max-width: 640px) {
    width: ${(props) =>
      props.$orientation === "vertical" ? "calc(50% - 0.75rem)" : "100%"};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 14px;
  overflow: visible;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.3),
    0 0 12px rgba(255, 255, 255, 0.2);
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 14px;
  background: transparent;

  max-height: ${(props) =>
    props.$orientation === "vertical" ? "600px" : "500px"};
  object-fit: ${(props) =>
    props.$orientation === "vertical" ? "contain" : "cover"};

  @media (max-width: 640px) {
    max-height: ${(props) =>
      props.$orientation === "vertical" ? "500px" : "400px"};
  }
`;
