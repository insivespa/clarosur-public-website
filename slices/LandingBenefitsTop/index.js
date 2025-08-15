import styled from "styled-components";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.LandingBenefitsTopSlice} LandingBenefitsTopSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingBenefitsTopSlice>} LandingBenefitsTopProps
 * @param { LandingBenefitsTopProps }
 */
const LandingBenefitsTop = ({ slice }) => {
  const bgUrl = slice?.primary?.bgimage?.url || "";
  const bgAlt = slice?.primary?.bgimage?.alt || "";

  return (
    <Section aria-label={bgAlt || "Landing benefits"}>
      <Background
        style={{
          backgroundImage: bgUrl
            ? `url(${bgUrl})`
            : `linear-gradient(135deg, #555, #777)`,
          filter: bgUrl ? "blur(3px)" : "none",
        }}
      />
      {bgUrl && <Overlay />}
      <Content>
        <Grid>
          {slice?.items?.map((item, i) => (
            <Cell key={i}>
              <Metric>
                <PrismicRichText field={item.metric} />
              </Metric>
              <MetricText>
                <PrismicRichText field={item.metrictext} />
              </MetricText>
            </Cell>
          ))}
        </Grid>
      </Content>
    </Section>
  );
};

export default LandingBenefitsTop;

const Section = styled.section`
  position: relative;
  inline-size: 100vw;
  margin-inline: calc(50% - 50vw);

  min-height: 220px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  transition: background-image 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.35)
  );
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
`;

const Metric = styled.div`
  h1,
  h2 {
    margin: 0;
    font-weight: 700;
    line-height: 1;
    font-size: clamp(32px, 6vw, 72px);
    letter-spacing: 0.5px;
    text-align: center;
    white-space: nowrap;

    @media (min-width: 901px) {
      font-variant-numeric: tabular-nums;
    }
  }
`;

const MetricText = styled.div`
  p {
    margin: 10px 0 0 0;
    font-size: clamp(1rem, 1.5vw, 18px);
    line-height: 1.25;
    opacity: 0.95;
    text-align: center;
  }
`;
