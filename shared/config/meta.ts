type BuildMeta = {
  title?: string;
  description?: string;
  image?: string;
};

const appName = process.env.APP_NAME;
export const defaultMeta = {
  title: appName || "Unknown App",
  description: "Interactive community",
};

export const buildMeta = ({ title, description, image }: BuildMeta) => {
  return {
    title: title ? `${title} - ${appName}` : defaultMeta.title,
    description: description || defaultMeta.description,
    openGraph: {
      title,
      description,
      images: image ? [image] : ["/default-og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : ["/default-og.png"],
    },
  };
};
