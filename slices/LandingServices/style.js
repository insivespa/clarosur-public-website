import { PrismicLink } from "@prismicio/react";
import styled from "styled-components";

const colors = {
  sectionBg: "#ffffff",
  sectionHeading: "#19bcd4",
  serviceBgFallback: "#19bcd4",
  serviceOverlay: "rgba(0, 0, 0, 0.5)",
  serviceText: "#ffffff",
  scrollbarThumb: "rgba(255, 255, 255, 0.3)",

  ctaBorder: "#ffc107",
  ctaText: "#393b37",
  ctaBg: "#ffc107",

  ctaHoverBg: "#ffd633",
  ctaHoverBorder: "#ffd633",
  ctaHoverText: "#393b37",

  ctaActiveBg: "#e0a800",
  ctaActiveBorder: "#d39e00",
  ctaActiveText: "#ffffff",

  boxShadowDefault: "rgba(0, 0, 0, 0.15)",
  boxShadowHover: "rgba(0, 0, 0, 0.25)",
};

export const Section = styled.div`
  background-color: ${colors.sectionBg};
  padding: 1rem 10rem;

  h1 {
    color: ${colors.sectionHeading};
    text-align: center;
    margin-top: 0;
    font-size: 2rem;
  }

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

export const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

/* ----- NO HOVER VARIANT ----- */
export const ServiceNoHover = styled.div`
  position: relative;
  flex: 0 1 calc(33.33% - 1rem);
  height: 300px;
  border-radius: 8px;
  background: ${({ bgimage }) =>
    bgimage
      ? `url(${bgimage}) center/cover no-repeat`
      : colors.serviceBgFallback};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${colors.serviceOverlay};
    opacity: 1;
    z-index: 1;
  }

  .service-link {
    position: absolute;
    inset: 0;
    z-index: 2;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .service-content {
    text-align: left;
  }

  .service-content h2,
  .service-content p {
    color: ${colors.serviceText};
    opacity: 1;
    transform: translateY(0);
    margin: 0;
    padding: 0 10px;
  }

  .service-content h2 {
    font-size: 1.25rem;
    line-height: 1.2;
    margin-bottom: 7px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .service-content p {
    font-size: 0.95rem;
    line-height: 1.2;
    max-height: 120px;
    overflow: auto;
    pointer-events: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.scrollbarThumb};
      border-radius: 4px;
    }
  }

  @media (max-width: 1024px) {
    flex: 0 1 calc(50% - 1rem);
  }

  @media (max-width: 600px) {
    flex: 0 1 100%;
  }
`;

/* ----- HOVER VARIANT ----- */
export const ServiceHover = styled.div`
  position: relative;
  flex: 0 1 calc(33.33% - 1rem);
  height: 300px;
  border-radius: 8px;
  background: ${({ bgimage }) =>
    bgimage
      ? `url(${bgimage}) center/cover no-repeat`
      : colors.serviceBgFallback};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${colors.serviceOverlay};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 1;

    @media (max-width: 768px) {
      opacity: 1;
    }
  }

  .service-link {
    position: absolute;
    inset: 0;
    z-index: 2;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .service-content {
    pointer-events: none;
    text-align: left;
  }

  .service-content h2,
  .service-content p {
    color: ${colors.serviceText};
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    margin: 0;
    padding: 0 10px;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover .service-content h2,
  &:hover .service-content p {
    opacity: 1;
    transform: translateY(0);
  }

  .service-content h2 {
    font-size: 1.25rem;
    line-height: 1.2;
    margin-bottom: 7px;

    @media (max-width: 768px) {
      font-size: 1rem;
      opacity: 1;
      transform: translateY(0);
    }
  }

  .service-content p {
    font-size: 0.95rem;
    line-height: 1.2;
    max-height: 120px;
    overflow: auto;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      opacity: 1;
      transform: translateY(0);
    }

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.scrollbarThumb};
      border-radius: 4px;
    }
  }

  @media (max-width: 1024px) {
    flex: 0 1 calc(50% - 1rem);
  }

  @media (max-width: 600px) {
    flex: 0 1 100%;
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

  box-shadow: 0 6px 8px ${colors.boxShadowDefault};

  p {
    font-weight: 600;
  }

  &:hover {
    background-color: ${colors.ctaHoverBg};
    border-color: ${colors.ctaHoverBorder};
    color: ${colors.ctaHoverText};
    box-shadow: 0 8px 14px ${colors.boxShadowHover};
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
