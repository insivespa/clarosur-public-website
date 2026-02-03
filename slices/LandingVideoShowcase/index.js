import { PrismicRichText } from "@prismicio/react";
import { useState, useRef, useEffect } from "react";
import {
  Section,
  Title,
  Description,
  VideoGrid,
  VideoItem,
  VideoWrapper,
  Video,
} from "./style";

const LandingVideoShowcase = ({ slice }) => {
  const { title, description } = slice.primary;
  const videos = slice.items || [];
  const isBackgroundVariation = slice.variation === "backgroundColor";
  const [videoOrientations, setVideoOrientations] = useState({});
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleMetadata = (index, video) => {
      if (!video) return;

      const isVertical = video.videoHeight > video.videoWidth;
      setVideoOrientations((prev) => ({
        ...prev,
        [index]: isVertical ? "vertical" : "horizontal",
      }));
    };

    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (video.readyState >= 1) {
          handleMetadata(index, video);
        } else {
          const listener = () => handleMetadata(index, video);
          video.addEventListener("loadedmetadata", listener);
          return () => video.removeEventListener("loadedmetadata", listener);
        }
      }
    });
  }, [videos]);

  return (
    <Section $isBackgroundVariation={isBackgroundVariation}>
      <Title $isBackgroundVariation={isBackgroundVariation}>
        <PrismicRichText field={title} />
      </Title>

      <Description $isBackgroundVariation={isBackgroundVariation}>
        <PrismicRichText field={description} />
      </Description>

      <VideoGrid>
        {videos.map((item, index) => {
          const videoUrl = item.video?.url;
          const thumbnailUrl = item.thumbnail?.url;
          if (!videoUrl) return null;

          const orientation = videoOrientations[index] || "horizontal";

          return (
            <VideoItem key={index} $orientation={orientation}>
              <VideoWrapper $isBackgroundVariation={isBackgroundVariation}>
                <Video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={videoUrl}
                  poster={thumbnailUrl || undefined}
                  controls
                  playsInline
                  preload="metadata"
                  $orientation={orientation}
                  $isBackgroundVariation={isBackgroundVariation}
                />
              </VideoWrapper>
            </VideoItem>
          );
        })}
      </VideoGrid>
    </Section>
  );
};

export default LandingVideoShowcase;
