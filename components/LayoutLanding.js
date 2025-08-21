import Head from "next/head";
import styled from "styled-components";
import LandingNav from "./common/LandingNav/LandingNav";
import LandingFooter from "./common/LandingFooter/LandingFooter";
import { getMetaTags } from "../utils/seo";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34d039;
  border-radius: 10px;
  width: fit-content;
  padding: 5px;
  position: fixed;
  bottom: 2rem;
  right: 3.5rem;
  z-index: 1000;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    display: block;
    right: 1rem;
    bottom: 1rem;
  }
`;

export const LandingLayout = (props) => {
  const { children, header, footer, page, activeDocMeta } = props;
  const title = page?.data?.seoTitle || "Clarosur";
  const description = page?.data?.seodescription || "-";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="canonical"
          href={`${activeDocMeta.sitename}${page ? `/${page.uid}` : ""}`}
        />
        {getMetaTags({
          description,
          title,
        })}
      </Head>
      <LandingNav landingNav={header} />
      <main>{children}</main>
      <WhatsAppButton
        href="https://wa.me/56964904389"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp color="white" size={40} />
      </WhatsAppButton>
      <LandingFooter landingFooter={footer} />
    </>
  );
};
