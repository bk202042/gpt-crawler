import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://nextjs.org/docs/app/building-your-application/routing",
  match: "https://nextjs.org/docs/app/building-your-application/routing/**",
  maxPagesToCrawl: 2000,
  outputFileName: "output.md",
  maxTokens: 2000000,
  selector: "main[class^='docs_main']", // Target Next.js docs main content area
  waitForSelectorTimeout: 10000, // Increase timeout to 10 seconds
};
