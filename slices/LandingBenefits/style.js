import styled from "styled-components";
import { motion } from "framer-motion";

const primary = "#0066cc";
const text = "#0a0a0a";

const Section = styled.section`
  width: 100%;
  padding: clamp(24px, 5vw, 64px) 16px;
  color: ${text};
`;

const Header = styled.header`
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
    text-align: center;
    margin: 0 0 1rem 0;
  }
`;

const Grid = styled.div`
  max-width: 1200px;
  margin: 20px auto 0;
  display: grid;
  gap: 3rem;
  grid-template-columns: minmax(0, 1fr);

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  @media (min-width: 640px) {
    max-width: 420px;
  }
`;

const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid ${primary};
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
    display: block;
  }

  transition: transform 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }
`;

const Heading = styled.div`
  gap: 8px;
  cursor: pointer;
  user-select: none;
  align-items: center;
  display: inline-flex;
  justify-content: center;

  p {
    font-weight: 600;
    line-height: 1.2;
    margin: 0;
  }
`;

const Chevron = styled(motion.div)`
  width: 0;
  height: 0;
  border-left: 8px solid ${primary};
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
`;

const BodyCopy = styled.div`
  margin-top: 12px;
  overflow: hidden;

  p {
    margin: 0.25rem 0;
    text-align: justify;
  }
`;

export { Section, Header, Grid, Card, IconButton, Heading, Chevron, BodyCopy };
