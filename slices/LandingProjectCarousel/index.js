import { motion, AnimatePresence } from "framer-motion";
import { PrismicRichText } from "@prismicio/react";
import { useState, useEffect, useRef } from "react";
import {
  Project,
  ProjectTitle,
  ProjectDescription,
  ProjectsWrapper,
  Section,
  Title,
  CarouselWrapper,
  CarouselContainer,
  CarouselButton,
  CarouselDots,
  Dot,
  CtaButton,
  ProjectLocation,
} from "./style";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { asText } from "@prismicio/helpers";

const ImageCarousel = ({ images, autoScroll = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    if (autoScroll && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [autoScroll, images.length]);

  const goToPrevious = () => {
    stopAutoScroll();
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    startAutoScroll();
  };

  const goToNext = () => {
    stopAutoScroll();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startAutoScroll();
  };

  const goToSlide = (index) => {
    stopAutoScroll();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    startAutoScroll();
  };

  if (!images || images.length === 0) {
    return <p style={{ color: "red" }}>No images available for this project</p>;
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            src={images[currentIndex].url}
            alt={
              images[currentIndex]?.alt || `Project image ${currentIndex + 1}`
            }
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              minHeight: "500px",
            }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <CarouselButton
              onClick={goToPrevious}
              position="left"
              aria-label="Previous image"
            >
              <FiChevronLeft size={24} />
            </CarouselButton>

            <CarouselButton
              onClick={goToNext}
              position="right"
              aria-label="Next image"
            >
              <FiChevronRight size={24} />
            </CarouselButton>
          </>
        )}
      </CarouselContainer>
    </CarouselWrapper>
  );
};

const LandingProjectCarousel = ({ slice }) => {
  const ctaText = asText(slice?.primary?.ctatext)?.trim();

  return (
    <>
      <Section id="proyectos">
        <Title>
          {slice?.primary?.title && (
            <PrismicRichText field={slice.primary.title} />
          )}
          {slice?.primary?.description && (
            <PrismicRichText field={slice.primary.description} />
          )}
        </Title>

        <ProjectsWrapper>
          {slice?.items?.map((item, i) => {
            const carouselData = item?.carousel?.data;

            if (!carouselData) {
              return null;
            }

            const images =
              carouselData?.images
                ?.map((img) => img?.image)
                .filter((img) => img?.url) || [];

            return (
              <Project key={i}>
                {carouselData?.project_title && (
                  <ProjectTitle>
                    <PrismicRichText field={carouselData.project_title} />
                  </ProjectTitle>
                )}

                {carouselData?.location && (
                  <ProjectLocation>
                    <TiLocation
                      size={15}
                      style={{ color: "#333", flexShrink: 0 }}
                    />
                    <PrismicRichText field={carouselData.location} />
                  </ProjectLocation>
                )}

                {carouselData?.description && (
                  <ProjectDescription>
                    <PrismicRichText field={carouselData.description} />
                  </ProjectDescription>
                )}

                {images.length > 0 && (
                  <ImageCarousel
                    images={images}
                    autoScroll={carouselData?.auto_scroll ?? true}
                  />
                )}
              </Project>
            );
          })}
        </ProjectsWrapper>
      </Section>

      {ctaText && slice?.primary?.ctaurl && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0 40px",
          }}
        >
          <CtaButton field={slice.primary.ctaurl}>
            <PrismicRichText field={slice.primary.ctatext} />
            <FiArrowRight size={20} />
          </CtaButton>
        </div>
      )}
    </>
  );
};

export default LandingProjectCarousel;
