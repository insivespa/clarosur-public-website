import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 1.5rem 10rem;
  background-color: #0066cc;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Title = styled.div`
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: white;
    text-align: center;
    margin: 0 0 1rem 0;
  }
`;

const Description = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  color: #f2f2f2;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
  }
`;
export { Wrapper, Content, Title, Description, VideoWrapper };
