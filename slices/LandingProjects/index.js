import { PrismicRichText } from "@prismicio/react";
import { useState, useEffect } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import {
  Project,
  ProjectTitle,
  ProjectDescription,
  ProjectsWrapper,
  Section,
  Title,
  CompareSliderWrapper,
  CtaButton,
  ProjectLocation,
} from "./style";
import { FiArrowRight } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";

// Component to handle image comparison with dynamic aspect ratio

const ImageCompareSlider = ({ beforeImage, afterImage }) => {
  const [aspectRatio, setAspectRatio] = useState("16 / 9");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const ratio = img.width / img.height;

      let adjustedRatio;
      if (ratio >= 1) {
        adjustedRatio = ratio;
      } else {
        adjustedRatio = ratio * 2;
      }

      setAspectRatio(`${adjustedRatio.toFixed(2)} / 1`);
      setIsLoading(false);
    };
    img.onerror = () => {
      setAspectRatio("16 / 9");
      setIsLoading(false);
    };
    img.src = beforeImage.url;
  }, [beforeImage.url]);

  return (
    <CompareSliderWrapper
      style={{ aspectRatio: isLoading ? "16 / 9" : aspectRatio }}
    >
      <ReactCompareSlider
        style={{ width: "100%", height: "100%" }}
        itemOne={
          <ReactCompareSliderImage
            src={beforeImage.url}
            alt={beforeImage?.alt || "Before image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={afterImage.url}
            alt={afterImage?.alt || "After image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        }
      />
    </CompareSliderWrapper>
  );
};

const OurProjects = ({ slice }) => (
  <>
    <Section id="trabajos">
      <Title>
        {slice?.primary?.title && (
          <PrismicRichText field={slice.primary.title} />
        )}
        {slice?.primary?.description && (
          <PrismicRichText field={slice.primary.description} />
        )}
      </Title>

      <ProjectsWrapper>
        {slice?.items?.map((item, i) => (
          <Project key={i}>
            {item?.projecttitle && (
              <ProjectTitle>
                <PrismicRichText field={item.projecttitle} />
              </ProjectTitle>
            )}

            {item?.location && (
              <ProjectLocation>
                <TiLocation
                  size={15}
                  style={{ color: "#333", flexShrink: 0 }}
                />
                <PrismicRichText field={item.location} />
              </ProjectLocation>
            )}

            {item?.projectdescription && (
              <ProjectDescription>
                <PrismicRichText field={item.projectdescription} />
              </ProjectDescription>
            )}

            {item?.before?.url && item?.after?.url ? (
              <ImageCompareSlider
                beforeImage={item.before}
                afterImage={item.after}
              />
            ) : (
              <p style={{ color: "red" }}>
                Missing before/after images for this project
              </p>
            )}
          </Project>
        ))}
      </ProjectsWrapper>
    </Section>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0 40px",
      }}
    >
      <CtaButton field={slice?.primary?.ctaurl}>
        <PrismicRichText field={slice?.primary?.ctatext} />
        <FiArrowRight size={20} />
      </CtaButton>
    </div>
  </>
);

export default OurProjects;
