import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

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

const Title = styled.div`
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
    text-align: center;
    margin: 0 0 1rem 0;
  }
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Project = styled.div`
  border: 1px solid #cccc;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;

  min-height: 460px;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: auto;
  }
`;

const ProjectTitle = styled.div`
  h2 {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: 700;
    color: #111827;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.05rem;
    }
  }
`;

const ProjectDescription = styled.div`
  text-align: center;
  max-width: 600px;
  text-align: justify;
  p {
    font-size: 1rem;
  }
`;

const CompareSliderWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16 / 9;

  @media (max-width: 768px) {
    margin-left: -1rem;
    margin-right: -1rem;
    width: calc(100% + 2rem);
    border-radius: 0;
  }
`;

export {
  Section,
  Title,
  ProjectsWrapper,
  Project,
  ProjectTitle,
  ProjectDescription,
  CompareSliderWrapper,
};
