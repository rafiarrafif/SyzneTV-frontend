import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nounoz TV - Anime Streaming Station Center",
  description:
    "Nounoz TV adalah tempat santai buat nonton anime kualitas tinggi tanpa ribet. Didukung komunitas yang aktif dan ramah, kamu nggak cuma nonton—tapi juga bisa ngobrol, sharing, dan seru-seruan bareng.",
  keywords: [
    "nonton anime",
    "streaming anime",
    "anime sub indo",
    "anime HD",
    "komunitas anime",
    "Nounoz TV",
  ],
  openGraph: {
    title: "Nounoz TV - Streaming Anime HD + Komunitas Asik",
    description:
      "Nonton anime jadi lebih seru bareng teman-teman. Kualitas jernih, tanpa iklan ganggu, dan selalu update!",
    url: "https://nounoz.tv",
    siteName: "Nounoz TV",
    images: [
      {
        url: "https://nounoz.tv/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nounoz TV - Nonton Anime HD Bareng Komunitas",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nounoz TV - Nonton Anime HD Bareng Komunitas",
    description:
      "Streaming anime kualitas tinggi sambil ngobrol santai bareng komunitas yang aktif dan suportif.",
    images: ["https://nounoz.tv/og-image.jpg"],
  },
};
