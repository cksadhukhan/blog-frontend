// lib/config.js
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "development",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "b1rsx8gb",
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};
