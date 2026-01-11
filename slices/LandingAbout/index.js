import { PrismicRichText } from "@prismicio/react";
import { Wrapper, ImageWrapper, TextSection, ContactButton } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 */
const About = ({ slice }) => {
  const image = slice?.primary?.image;

  return (
    <Wrapper>
      <TextSection>
        <div className="text-block">
          <PrismicRichText field={slice.primary.title} />

          {slice.primary.description && (
            <PrismicRichText field={slice.primary.description} />
          )}

          {/* WhatsApp Button */}
          <ContactButton
            href="https://wa.me/56964904389"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero contactarlos
          </ContactButton>
        </div>
      </TextSection>

      {image?.url && (
        <ImageWrapper>
          <img
            src={image.url}
            alt={image.alt || "About section image"}
            loading="lazy"
          />
        </ImageWrapper>
      )}
    </Wrapper>
  );
};

export default About;
