import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Section, ServicesWrapper, ServiceNoHover, ServiceHover } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.LandingServicesSlice} LandingServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingServicesSlice>} LandingServicesProps
 * @param { LandingServicesProps }
 */

/** -------- variant objects ---------- **/

const NoHover = ({ title, items }) => (
  <Section id="servicios">
    <PrismicRichText field={title} />
    <ServicesWrapper>
      {items.map((i, idx) => (
        <ServiceNoHover key={idx} bgimage={i.bgimage?.url}>
          <div className="service-link">
            <div className="service-content">
              <PrismicRichText field={i.servicetitle} />
              <PrismicRichText field={i.description} />
            </div>
          </div>
        </ServiceNoHover>
      ))}
    </ServicesWrapper>
  </Section>
);

const Hover = ({ title, items }) => (
  <Section id="other-services">
    <PrismicRichText field={title} />
    <ServicesWrapper>
      {items.map((i, idx) => (
        <ServiceHover key={idx} bgimage={i.bgimage?.url}>
          <PrismicLink field={i.link} className="service-link">
            <div className="service-content">
              <PrismicRichText field={i.servicetitle} />
              <PrismicRichText field={i.description} />
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
  const title = primary?.title;

  // choose object by variation
  const Variants = {
    nohover: NoHover,
    default: Hover,
    hover: Hover,
  };

  const Variant = Variants[variation] || Variants.default;
  return <Variant title={title} items={items} />;
};

export default LandingServices;
