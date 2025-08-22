import { SliceZone } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { LandingLayout } from "../../components/LayoutLanding";
import SliceBenefits from "../../slices/LandingBenefits";

const mergeBenefitsWithTop = (slices = []) => {
  const merged = [];
  for (let i = 0; i < slices.length; i++) {
    const s = slices[i];

    if (s.slice_type === "slice_benefits") {
      const next = slices[i + 1];
      const top =
        next && next.slice_type === "landing_benefits_top" ? next : null;

      merged.push({ ...s, __withTop: top });

      if (top) i++;
    } else {
      merged.push(s);
    }
  }
  return merged;
};

const LandingPage = (props) => {
  if (props?.error || !props?.page?.lang) {
    console.error(props, "[uid]");
    return <p>Error loading page.</p>;
  }

  const { page, landingNav, landingFooter } = props;

  const activeDoc = {
    lang: page.lang,
    type: page.type,
    url: page.url,
    sitename: process.env.NEXT_PUBLIC_SITENAME || "http://localhost",
  };

  // Merge adjacent slices (benefits + top)
  const mergedSlices = mergeBenefitsWithTop(page.data?.slices || []);

  // Inject topSlice into SliceBenefits only
  const injectedComponents = {
    ...components,
    slice_benefits: (p) => (
      <SliceBenefits {...p} topSlice={p.slice.__withTop || null} />
    ),
  };

  return (
    <LandingLayout
      header={landingNav}
      footer={landingFooter}
      page={page}
      activeDocMeta={activeDoc}
    >
      <SliceZone slices={mergedSlices} components={injectedComponents} />
    </LandingLayout>
  );
};

export async function getStaticProps({ previewData, params: { uid } }) {
  try {
    const client = createClient({ previewData });
    const page = await client.getByUID("landingpage", uid);
    const landingNav = await client.getSingle("landingnav");
    const landingFooter = await client.getSingle("landingfooter");

    return {
      props: { page: page || null, landingNav, landingFooter },
      revalidate: 60,
    };
  } catch (error) {
    return { props: { error: JSON.stringify(error) } };
  }
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType("landingpage");
  return {
    paths: pages.map((page) => ({ params: { uid: page.uid } })),
    fallback: true,
  };
}

export default LandingPage;
