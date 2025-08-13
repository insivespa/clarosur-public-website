import { PrismicRichText } from "@prismicio/react";
import { Wrapper, VideoWrapper, TextSection } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param { AboutProps }
 */
const About = ({ slice }) => {
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

      {slice.primary.video?.html && (
        <VideoWrapper
          dangerouslySetInnerHTML={{ __html: slice.primary.video.html }}
        />
      )}
    </Wrapper>
  );
};

export default About;
