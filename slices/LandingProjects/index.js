import { PrismicRichText } from "@prismicio/react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import {
  Project,
  ProjectDescription,
  ProjectsWrapper,
  Section,
  Title,
  CompareSliderWrapper,
} from "./style";

/**
 * @typedef {import("@prismicio/client").Content.OurProjectsSlice} OurProjectsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurProjectsSlice>} OurProjectsProps
 * @param { OurProjectsProps }
 */
const OurProjects = ({ slice }) => (
  <Section id="trabajos">
    <Title>
      {slice.primary.title && (
        <>
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.description} />
        </>
      )}
    </Title>

    <ProjectsWrapper>
      {slice?.items?.map((item, i) => (
        <Project key={i}>
          <ProjectDescription>
            <PrismicRichText field={item.projectdescription} />
          </ProjectDescription>

          {item?.before?.url && item?.after?.url ? (
            <CompareSliderWrapper>
              <ReactCompareSlider
                style={{ width: "100%", height: "300px" }}
                itemOne={
                  <ReactCompareSliderImage
                    src={item.before.url}
                    alt={item.before.alt || "Before image"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                    }}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={item.after.url}
                    alt={item.after.alt || "After image"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                    }}
                  />
                }
                position={50}
                handle={
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      border: "2px solid #000000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "ew-resize",
                      boxShadow: "0 0 4px rgba(0,0,0,0.4)",
                    }}
                  >
                    <span style={{ color: "#000", fontWeight: "bold" }}>⇆</span>
                  </div>
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
);

export default OurProjects;
