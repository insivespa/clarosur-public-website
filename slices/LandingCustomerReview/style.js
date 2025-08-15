import styled from "styled-components";
import Slider from "react-slick";

const colors = {
  sectionBg: "white",
  titleText: "#3962e9",
  sliderDot: "rgb(90, 115, 198)",
  sliderDotActive: "#3962e9",
  reviewBg: "#ffffff",
  reviewBorder: "#ddd",
  reviewShadow: "rgba(0, 0, 0, 0.05)",
  reviewHoverShadow: "rgba(0, 0, 0, 0.1)",
  letterFallbackBg: "#007bff",
  letterFallbackText: "white",
  reviewText: "#555",
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
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${colors.reviewBorder};
  flex-shrink: 0;
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
