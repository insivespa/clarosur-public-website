import { PrismicRichText } from "@prismicio/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BodyCopy,
  Card,
  Chevron,
  Grid,
  Header,
  Heading,
  IconButton,
  Section,
} from "./style";
import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.SliceBenefitsSlice} SliceBenefitsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliceBenefitsSlice>} SliceBenefitsProps
 * @param { SliceBenefitsProps }
 */

const SliceBenefits = ({ slice }) => {
  const [openIndexes, setOpenIndexes] = useState(
    slice.items?.map((_, idx) => idx) || []
  );

  const toggle = (i) => {
    setOpenIndexes((prev) =>
      prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i]
    );
  };

  return (
    <Section aria-labelledby="benefits-title">
      {slice?.primary?.title && (
        <Header id="benefits-title">
          <PrismicRichText field={slice.primary.title} />
        </Header>
      )}

      <Grid>
        {slice.items?.map((item, i) => {
          const isOpen = openIndexes.includes(i);
          return (
            <Card key={i}>
              <IconButton
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`benefit-panel-${i}`}
              >
                {item?.icon?.url && (
                  <img src={item.icon.url} alt={item.icon.alt || ""} />
                )}
              </IconButton>

              <Heading
                role="button"
                tabIndex={0}
                onClick={() => toggle(i)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && toggle(i)
                }
                aria-expanded={isOpen}
                aria-controls={`benefit-panel-${i}`}
              >
                <Chevron
                  aria-hidden="true"
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.25 }}
                />
                <PrismicRichText field={item.keytitle} />
              </Heading>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <BodyCopy
                    as={motion.div}
                    id={`benefit-panel-${i}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <PrismicRichText
                      field={item.description}
                      components={{
                        paragraph: ({ children }) => <p>{children}</p>,
                        list: ({ children }) => <ul>{children}</ul>,
                        listItem: ({ children }) => <li>{children}</li>,
                      }}
                    />
                  </BodyCopy>
                )}
              </AnimatePresence>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
};

export default SliceBenefits;
