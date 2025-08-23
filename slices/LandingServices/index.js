import { PrismicLink, PrismicRichText } from "@prismicio/react";
import {
  Section,
  ServicesWrapper,
  ServiceNoHover,
  ServiceHover,
  CtaButton,
} from "./style";
import { FiArrowRight } from "react-icons/fi";

/**
 * @typedef {import("@prismicio/client").Content.LandingServicesSlice} LandingServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingServicesSlice>} LandingServicesProps
 * @param { LandingServicesProps }
 */

/** -------- variant components ---------- **/

const NoHover = ({ title, items, ctatext, ctaurl, defaultBg }) => (
  <>
    <Section id="servicios">
      {title && <PrismicRichText field={title} />}
      <ServicesWrapper>
        {items.map((i, idx) => (
          <ServiceNoHover key={idx} bgimage={i.bgimage?.url || defaultBg}>
            <div className="service-link">
              <div className="service-content">
                {i.servicetitle && <PrismicRichText field={i.servicetitle} />}
                {i.description && <PrismicRichText field={i.description} />}
              </div>
            </div>
          </ServiceNoHover>
        ))}
      </ServicesWrapper>
    </Section>

    {(ctatext || ctaurl) && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <CtaButton field={ctaurl}>
          {ctatext && <PrismicRichText field={ctatext} />}
          <FiArrowRight size={20} />
        </CtaButton>
      </div>
    )}
  </>
);

const Hover = ({ title, items }) => (
  <Section id="other-services">
    {title && <PrismicRichText field={title} />}
    <ServicesWrapper>
      {items.map((i, idx) => (
        <ServiceHover key={idx} bgimage={i.bgimage?.url}>
          <PrismicLink field={i.link} className="service-link">
            <div className="service-content">
              {i.servicetitle && <PrismicRichText field={i.servicetitle} />}
              {i.description && <PrismicRichText field={i.description} />}
            </div>
          </PrismicLink>
        </ServiceHover>
      ))}
    </ServicesWrapper>
  </Section>
);

/** -------- main slice ---------- **/

const LandingServices = ({ slice }) => {
  const { variation, primary, items = [] } = slice;
  const { title, ctatext, ctaurl, bgimage } = primary || {};

  const Variants = {
    nohover: NoHover,
    default: Hover,
    hover: Hover,
  };

  const Variant = Variants[variation] || Variants.default;

  return (
    <Variant
      title={title}
      items={items}
      ctatext={ctatext}
      ctaurl={ctaurl}
      defaultBg={bgimage?.url}
    />
  );
};

export default LandingServices;
