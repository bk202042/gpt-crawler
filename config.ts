import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://nextjs.org/docs/app/building-your-application/routing",
  match: "https://nextjs.org/docs/app/building-your-application/routing/**",
  maxPagesToCrawl: 2000,
  outputFileName: "output.md",
  maxTokens: 2000000,
};
