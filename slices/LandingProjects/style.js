import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1400px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Project = styled.div`
  border: 1px solid #cccc;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 460px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectDescription = styled.div`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
`;

const CompareSliderWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
`;

export {
  Section,
  Title,
  ProjectsWrapper,
  Project,
  ProjectDescription,
  CompareSliderWrapper,
};
