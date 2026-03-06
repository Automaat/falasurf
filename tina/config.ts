import { defineConfig } from "tinacms";

const imageField = {
  type: "object" as const,
  name: "images",
  label: "Images",
  list: true,
  fields: [
    { type: "image" as const, name: "src", label: "Image" },
    { type: "string" as const, name: "alt", label: "Alt text" },
  ],
};

const pricingCategory = {
  type: "object" as const,
  name: "category",
  fields: [
    { type: "string" as const, name: "label", label: "Category name" },
    {
      type: "object" as const,
      name: "rows",
      label: "Pricing rows",
      list: true,
      fields: [
        { type: "string" as const, name: "sessions", label: "Sessions" },
        { type: "string" as const, name: "hours", label: "Hours" },
        { type: "string" as const, name: "price", label: "Price" },
      ],
    },
  ],
};

export default defineConfig({
  branch:
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "local",
  token: process.env.TINA_TOKEN || "local",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "site",
        label: "Site content",
        path: "src/content/site",
        format: "json",
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "image", name: "backgroundImage", label: "Background image" },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "body",
                label: "Body",
                ui: { component: "textarea" },
              },
              imageField,
            ],
          },
          {
            type: "object",
            name: "windsurfing",
            label: "Windsurfing",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "body",
                label: "Body",
                ui: { component: "textarea" },
              },
              imageField,
            ],
          },
          {
            type: "object",
            name: "surfing",
            label: "Surfing",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "body",
                label: "Body",
                ui: { component: "textarea" },
              },
              imageField,
            ],
          },
          {
            type: "object",
            name: "location",
            label: "Location",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "body",
                label: "Body",
                ui: { component: "textarea" },
              },
              imageField,
              {
                type: "string",
                name: "mapEmbedUrl",
                label: "Google Maps embed URL",
              },
            ],
          },
          {
            type: "object",
            name: "pricing",
            label: "Pricing",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "sessionsLabel",
                label: "Sessions column label",
              },
              {
                type: "string",
                name: "hoursLabel",
                label: "Hours column label",
              },
              {
                type: "string",
                name: "priceLabel",
                label: "Price column label",
              },
              {
                type: "string",
                name: "bookButton",
                label: "Book button text",
              },
              {
                ...pricingCategory,
                name: "windsurfing",
                label: "Windsurfing",
              },
              {
                ...pricingCategory,
                name: "wingfoil",
                label: "Wingfoil",
              },
              {
                ...pricingCategory,
                name: "surfing",
                label: "Surfing",
              },
              {
                ...pricingCategory,
                name: "equipment",
                label: "Equipment rental",
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "phone", label: "Phone number" },
              { type: "string", name: "whatsappText", label: "WhatsApp button text" },
              { type: "string", name: "facebookUrl", label: "Facebook URL" },
              { type: "string", name: "instagramUrl", label: "Instagram URL" },
            ],
          },
        ],
      },
    ],
  },
});
