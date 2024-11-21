import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://firebase.google.com/codelabs/ai-genkit-rag#0",
  match: "https://firebase.google.com/codelabs/**",
  maxPagesToCrawl: 2000,
  outputFileName: "output.md",
  maxTokens: 2000000,
};
