import { PrismicRichText } from "@prismicio/react";
import { FaqSection, Icon, Wrapper } from "./style";
import { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LandingFaq = ({ slice }) => {
  const title = slice?.primary?.title;
  const items = slice?.items || [];

  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState({});

  const refs = useRef([]);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useLayoutEffect(() => {
    const newHeights = {};
    refs.current.forEach((ref, i) => {
      if (ref) {
        newHeights[i] = ref.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [items]);

  return (
    <Wrapper id="faq">
      <FaqSection>
        <div className="title">
          <PrismicRichText field={title} />
        </div>

        <div className="faq-list">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                <div className="faq-question" onClick={() => toggle(idx)}>
                  <Icon className={isOpen ? "open" : ""} />
                  <PrismicRichText field={item.question} />
                </div>

                <div className="faq-answer">
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={isOpen ? "open" : "closed"}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: heights[idx] ?? "auto",
                          opacity: 1,
                          visibility: "visible",
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transitionEnd: {
                            visibility: "hidden",
                          },
                        }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <div
                          ref={(el) => (refs.current[idx] = el)}
                          style={{ overflow: "hidden" }}
                        >
                          <PrismicRichText field={item.answer} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </FaqSection>
    </Wrapper>
  );
};

export default LandingFaq;
