module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: ["./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
            defaultExtractor: (content) =>
              content.match(/[\w-/.:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
};
