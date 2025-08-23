import { useState, useEffect, useRef } from "react";
import { PrismicRichText } from "@prismicio/react";
import { Section } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.LandingTimelineSlice} LandingTimelineSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingTimelineSlice>} LandingTimelineProps
 * @param { LandingTimelineProps }
 */

const LandingTimeline = ({ slice }) => {
  const title = slice.primary.title;
  const items = slice.items || [];

  const [isMobile, setIsMobile] = useState(false);

  const stepWrapperRef = useRef(null);
  const firstStepRef = useRef(null);
  const lastStepRef = useRef(null);
  const [linePositions, setLinePositions] = useState({ left: 0, right: 0 });

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Recalculate bar line on mount and resize
  useEffect(() => {
    const updateLinePositions = () => {
      if (
        stepWrapperRef.current &&
        firstStepRef.current &&
        lastStepRef.current
      ) {
        const wrapperRect = stepWrapperRef.current.getBoundingClientRect();
        const firstRect = firstStepRef.current.getBoundingClientRect();
        const lastRect = lastStepRef.current.getBoundingClientRect();

        const left = firstRect.left + firstRect.width / 2 - wrapperRect.left;
        const right = wrapperRect.right - (lastRect.left + lastRect.width / 2);

        setLinePositions({ left, right });
      }
    };

    updateLinePositions(); // Initial run
    window.addEventListener("resize", updateLinePositions); // Update on resize

    return () => {
      window.removeEventListener("resize", updateLinePositions);
    };
  }, [items, isMobile]);

  if (isMobile) {
    return (
      <Section id="steps">
        <div className="title">
          <PrismicRichText field={title} />
        </div>
        <div className="mobile-step-wrapper">
          {items.map((i, idx) => (
            <div key={idx} className="mobile-step">
              <div className="mobile-step-number">{idx + 1}</div>
              <div className="mobile-step-text">
                <PrismicRichText field={i.step} />
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section id="steps">
      <div className="title">
        <PrismicRichText field={title} />
      </div>

      <div
        className="step-wrapper"
        ref={stepWrapperRef}
        style={{
          "--line-left": `${linePositions.left}px`,
          "--line-right": `${linePositions.right}px`,
        }}
      >
        {items.map((i, idx) => (
          <div
            key={idx}
            className="step"
            ref={
              idx === 0
                ? firstStepRef
                : idx === items.length - 1
                ? lastStepRef
                : null
            }
          >
            <div className="step-number">{idx + 1}</div>
            <div className="step-text">
              <PrismicRichText field={i.step} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default LandingTimeline;
