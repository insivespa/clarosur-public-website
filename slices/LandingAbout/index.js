import { PrismicRichText } from "@prismicio/react";
import { Wrapper, ImageWrapper, TextSection } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param { AboutProps }
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
