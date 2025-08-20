import styled from "styled-components";
import { motion } from "framer-motion";

const colors = {
  primary: "#19bcd4",
  text: "#393b37",
  headerTitle: "#19bcd4",
  iconBorder: "#19bcd4",
  chevron: "#19bcd4",
  iconShadow: "rgba(0, 0, 0, 0.15)",
  iconHoverShadow: "rgba(0, 0, 0, 0.2)",
};

export const Section = styled.section`
  width: 100%;
  color: ${colors.text};

  padding: 2rem 10rem;

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

export const Header = styled.header`
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: ${colors.headerTitle};
    text-align: center;
    margin: 0 0 1rem 0;
  }
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: 30px auto 30px;
  display: grid;
  gap: 3rem;

  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
  align-items: start;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  @media (min-width: 640px) {
    max-width: 420px;
  }
`;

export const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid ${colors.iconBorder};
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px ${colors.iconShadow};

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
    display: block;
  }

  transition: transform 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px ${colors.iconHoverShadow};
  }
`;

export const Heading = styled.div`
  gap: 8px;
  cursor: pointer;
  user-select: none;
  align-items: center;
  display: inline-flex;
  justify-content: center;

  p {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.2;
    margin: 0;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.05rem;
    }
  }
`;

export const Chevron = styled(motion.div)`
  width: 0;
  height: 0;
  border-left: 8px solid ${colors.chevron};
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
`;

export const BodyCopy = styled.div`
  margin-top: 12px;
  overflow: hidden;

  p {
    margin: 0.25rem 0;
    text-align: center;
    padding: 0 30px;
  }
`;
