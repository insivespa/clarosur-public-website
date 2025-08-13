import styled from "styled-components";
import Slider from "react-slick";

export const Section = styled.section`
  padding: 2rem;
  background: white;
  padding: 1rem 10rem;

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
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
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
    color: rgb(90, 115, 198);
  }

  .slick-dots li.slick-active button:before {
    color: #3962e9;
  }
`;

export const Review = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  max-width: 450px;
  min-height: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const ReviewHead = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #ddd;
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
  background: #007bff;
  color: white;
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
  color: #555;
  line-height: 1.6;
`;
