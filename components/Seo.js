import { NextSeo } from "next-seo";

export default function Seo({ postData }) {
  const { title, slug, excerpt, banner } = postData;
  const bannerUrl = banner.url;

  return (
    <NextSeo
      title={title}
      description={excerpt}
      canonical={`https://webdevref.vercel.app/posts/${slug}`}
      openGraph={{
        type: "website",
        url: "https://webdevref.vercel.app",
        title: `${title}`,
        description: excerpt,
        locale: "en_EN",
        images: [
          {
            url: bannerUrl,
            width: 800,
            height: 600,
            alt: `banner image for ${title} post`,
          },
        ],
        site_name: "webdevref.vercel.app",
      }}
      twitter={{
        handle: "@Sanjib_104",
        site: "webdevref.vercel.app",
        cardType: "summary_large_image",
      }}
    />
  );
}
