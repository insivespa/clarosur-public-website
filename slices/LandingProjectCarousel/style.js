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

  p {
    font-size: 1.1rem;
    color: #666;
    margin: 0;
    line-height: 1.6;
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
  h1 {
    margin: 0;
    font-size: 1.3rem;
    line-height: 1.2;
    font-weight: 700;
    color: ${colors.projectTitle};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.05rem;
    }
  }
`;

export const ProjectLocation = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  color: #333;
  background-color: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  width: fit-content;
  max-width: 100%;
  min-height: 32px;
  padding: clamp(4px, 0.6vw, 8px) clamp(10px, 1.2vw, 16px);

  p {
    margin: 0;
    font-weight: 500;
    line-height: 1.4;
    white-space: nowrap;
    text-align: center;
    font-size: clamp(11px, 1.1vw, 13px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 6px 14px;

    p {
      white-space: normal; /* allow wrap on small screens */
      font-size: 12px;
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

export const CarouselWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  max-height: 320px;

  @media (max-width: 768px) {
    min-height: 220px;
    max-height: 260px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: -1rem;
    margin-right: -1rem;
    width: calc(100% + 2rem);
    border-radius: 0;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.position === "left" ? "left: 1rem;" : "right: 1rem;")}

  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid ${colors.projectBorder};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;

  color: ${colors.projectTitle};

  &:hover {
    background-color: #ffffff;
    box-shadow: 0 4px 8px ${colors.boxShadowHover};
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    ${(props) =>
      props.position === "left" ? "left: 0.5rem;" : "right: 0.5rem;"}

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 0.5rem;
    gap: 6px;
  }
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) =>
    props.active ? colors.titleText : "rgba(255, 255, 255, 0.6)"};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background-color: ${(props) =>
      props.active ? colors.titleText : "rgba(255, 255, 255, 0.9)"};
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
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
    margin: 0;
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
