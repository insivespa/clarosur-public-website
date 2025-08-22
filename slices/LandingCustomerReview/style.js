import styled from "styled-components";
import Slider from "react-slick";
import { PrismicLink } from "@prismicio/react";

const colors = {
  sectionBg: "#ffffff",
  titleText: "#19bcd4",
  sliderDot: "rgba(25, 188, 212, 0.6)",
  sliderDotActive: "#19bcd4",
  reviewBg: "#ffffff",
  reviewBorder: "#d3d6d8",
  reviewShadow: "rgba(0, 0, 0, 0.05)",
  reviewHoverShadow: "rgba(0, 0, 0, 0.1)",
  letterFallbackBg: "#19bcd4",
  letterFallbackText: "#ffffff",
  reviewText: "#5c5e5a",
};

export const Section = styled.section`
  background: ${colors.sectionBg};
  padding: 3rem 10rem;

  @media (max-width: 1200px) {
    padding: 3rem 6rem;
  }

  @media (max-width: 992px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 3rem;
  }
`;

export const Title = styled.div`
  text-align: center;

  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: ${colors.titleText};
    margin: 0 0 1rem 0;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 10px 0 !important;
  }

  .slick-slide > div {
    padding: 0 5px;
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: ${colors.sliderDot};
  }

  .slick-dots li.slick-active button:before {
    color: ${colors.sliderDotActive};
  }
`;

export const Review = styled.div`
  background: ${colors.reviewBg};
  border: 1px solid ${colors.reviewBorder};
  border-radius: 10px;
  padding: 1rem;
  max-width: 450px;
  min-height: 300px;
  box-shadow: 0 4px 20px ${colors.reviewShadow};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px ${colors.reviewHoverShadow};
  }
`;

export const ReviewHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${colors.reviewBorder};
  flex-shrink: 0;
`;

export const GoogleReviewLink = styled(PrismicLink)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  color: #4285f4;
  padding: 0.3em;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 1px 1px 1px ${colors.reviewBorder};

  &:hover {
    background: #f5f5f5;
  }

  &:focus-visible {
    outline: 2px solid #4285f4;
    outline-offset: 2px;
  }

  svg {
    display: block;
    flex-shrink: 0;
  }
`;

export const UserIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const LetterFallback = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${colors.letterFallbackBg};
  color: ${colors.letterFallbackText};
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Username = styled.div`
  font-weight: 600;
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 0.25rem;
`;

export const ReviewText = styled.div`
  font-size: 0.95rem;
  color: ${colors.reviewText};
  line-height: 1.6;
`;
