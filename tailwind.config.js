const defaultTheme = require("tailwindcss/defaultTheme");

const regex = new RegExp(/production/);
const production = process.argv.some((e) => regex.test(e));

// Config files
const settings = require("./webpack.settings.js");

module.exports = {
  target: "ie11",
  purge: {
    enabled: production,
    content: settings.purgeCssConfig.paths,
  },
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",

        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        secondary: {
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
        },
      },
      fontFamily: {
        sans: ["var(--font-family-primary)", ...defaultTheme.fontFamily.sans],
        headline: [
          "var(--font-family-secondary)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
      },
    },
  },
  variants: {
    alignItems: false,
    backgroundColor: false,
    backgroundSize: false,
    borderColor: false,
    borderRadius: false,
    borderWidth: false,
    container: false,
    display: false,
    fill: false,
    flex: false,
    flexDirection: false,
    flexGrow: false,
    flexShrink: false,
    flexWrap: false,
    fontFamily: false,
    fontSize: ["responsive"],
    fontWeight: false,
    height: false,
    inset: false,
    justifyContent: false,
    lineHeight: false,
    margin: false,
    minWidth: false,
    maxHeight: false,
    maxWidth: false,
    opacity: false,
    overflow: false,
    padding: ["responsive"],
    preflight: false,
    space: false,
    position: false,
    textAlign: false,
    textColor: ["hover"],
    textDecoration: false,
    textTransform: false,
    transform: false,
    transitionDuration: false,
    transitionProperty: false,
    transitionTimingFunction: false,
    width: false,
  },
  corePlugins: [
    "alignItems",
    "backgroundColor",
    "backgroundSize",
    "borderColor",
    "borderRadius",
    "borderWidth",
    "container",
    "display",
    "fill",
    "flex",
    "flexDirection",
    "flexGrow",
    "flexShrink",
    "flexWrap",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "height",
    "inset",
    "justifyContent",
    "lineHeight",
    "margin",
    "minWidth",
    "maxHeight",
    "maxWidth",
    "opacity",
    "overflow",
    "padding",
    "preflight",
    "space",
    "position",
    "textAlign",
    "textColor",
    "textDecoration",
    "textTransform",
    "transform",
    "transitionDuration",
    "transitionProperty",
    "transitionTimingFunction",
    "width",
  ],
  plugins: [
    require("tailwind-css-variables")(
      {
        colors: "color",
        screens: false,
        fontFamily: false,
        fontSize: false,
        fontWeight: false,
        lineHeight: false,
        letterSpacing: false,
        backgroundSize: false,
        borderWidth: false,
        borderRadius: false,
        width: false,
        height: false,
        minWidth: false,
        minHeight: false,
        maxWidth: false,
        maxHeight: false,
        padding: "spacing",
        margin: false,
        boxShadow: false,
        zIndex: false,
        opacity: false,
      },
      {}
    ),
  ],
};
