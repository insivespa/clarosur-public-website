import { PrismicRichText } from "@prismicio/react";
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
} from "./style";
import { FiArrowRight } from "react-icons/fi";

/**
 * @typedef {import("@prismicio/client").Content.OurProjectsSlice} OurProjectsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurProjectsSlice>} OurProjectsProps
 * @param { OurProjectsProps }
 */
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

            {item?.projectdescription && (
              <ProjectDescription>
                <PrismicRichText field={item.projectdescription} />
              </ProjectDescription>
            )}

            {item?.before?.url && item?.after?.url ? (
              <CompareSliderWrapper>
                <ReactCompareSlider
                  style={{ width: "100%", height: "100%" }}
                  itemOne={
                    <ReactCompareSliderImage
                      src={item.before.url}
                      alt={item.before?.alt || "Before image"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={item.after.url}
                      alt={item.after?.alt || "After image"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                />
              </CompareSliderWrapper>
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
