export default defineConfig(({ mode }) => ({
  base: "/kluswerk-nl-online/",
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
