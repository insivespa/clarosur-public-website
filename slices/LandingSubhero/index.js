import styled from "styled-components";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.LandingSubheroSlice} LandingSubheroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingSubheroSlice>} LandingSubheroProps
 * @param { LandingSubheroProps }
 */
const LandingSubhero = ({ slice }) => {
  const items = Array.isArray(slice?.items) ? slice.items : [];

  return (
    <Bar>
      <Grid>
        {items.map((item, index) => (
          <Cell key={index}>
            <PrismicRichText
              field={item.text}
              components={{
                paragraph: ({ children }) => <span>{children}</span>,
              }}
            />
          </Cell>
        ))}
      </Grid>
    </Bar>
  );
};

export default LandingSubhero;

/* ---------- styled-components ---------- */
const colors = {
  barBackground: "#19bcd4",
  barText: "#ffffff",
  cellBorder: "rgba(255, 255, 255, 0.4)",
};

const Bar = styled.section`
  width: 100%;
  background: ${colors.barBackground};
  color: ${colors.barText};

  padding: 2.3rem 10rem;

  @media (max-width: 1200px) {
    padding: 2rem 6rem;
  }

  @media (max-width: 992px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: clamp(8px, 2vw, 16px);
    row-gap: 14px;
  }
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-weight: 800;
  line-height: 1.2;
  font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
  letter-spacing: 0.2px;

  padding: clamp(8px, 1.2vw, 16px) 0;

  overflow-wrap: anywhere;
  word-break: normal;

  border-bottom: 1px solid ${colors.cellBorder};

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    border-bottom: none;
    border-right: 1px solid ${colors.cellBorder};

    &:nth-child(3n) {
      border-right: none;
    }

    white-space: nowrap;
  }

  span {
    display: inline-block;
    font-size: inherit;
  }
`;
