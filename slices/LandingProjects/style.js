import { PrismicLink } from "@prismicio/react";
import styled from "styled-components";

const colors = {
  titleText: "#19bcd4",

  projectBorder: "#d3d6d8",
  projectTitle: "#393b37",

  ctaBorder: "#ffc107",
  ctaText: "#393b37",
  ctaBg: "#ffc107",

  ctaHoverBg: "#ffd633",
  ctaHoverBorder: "#ffd633",
  ctaHoverText: "#393b37",

  ctaActiveBg: "#e0a800",
  ctaActiveBorder: "#d39e00",
  ctaActiveText: "#ffffff",

  boxShadowDefault: "rgba(0, 0, 0, 0.1)",
  boxShadowHover: "rgba(0, 0, 0, 0.15)",
};

export const Section = styled.section`
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

export const Title = styled.div`
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: ${colors.titleText};
    text-align: center;
    margin: 0 0 1rem 0;
  }
`;

export const ProjectsWrapper = styled.div`
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

export const Project = styled.div`
  border: 1px solid ${colors.projectBorder};
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px ${colors.boxShadowDefault};
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

export const ProjectTitle = styled.div`
  h2 {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: 700;
    color: ${colors.projectTitle};
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.05rem;
    }
  }
`;

export const ProjectDescription = styled.div`
  text-align: center;
  max-width: 600px;
  text-align: justify;
  p {
    font-size: 1rem;
  }
`;

export const CompareSliderWrapper = styled.div`
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

export const CtaButton = styled(PrismicLink)`
  gap: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 2rem;
  border-radius: 999px;
  border: 2px solid ${colors.ctaBorder};
  background-color: ${colors.ctaBg};
  color: ${colors.ctaText};

  font-size: 1rem;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.25s ease, color 0.25s ease,
    border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;

  box-shadow: 0 4px 6px ${colors.boxShadowDefault};

  p {
    font-weight: 600;
  }

  &:hover {
    background-color: ${colors.ctaHoverBg};
    border-color: ${colors.ctaHoverBorder};
    color: ${colors.ctaHoverText};
    box-shadow: 0 6px 8px ${colors.boxShadowHover};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${colors.ctaActiveBg};
    border-color: ${colors.ctaActiveBorder};
    color: ${colors.ctaActiveText};
    transform: translateY(0);
    box-shadow: 0 4px 6px ${colors.boxShadowDefault};
  }

  min-height: 44px;
`;
