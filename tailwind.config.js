const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Add semantic color extensions if needed
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "var(--background)", // Sync with Tailwind
            foreground: "var(--foreground)", // Sync with Tailwind
            // NextUI default color overrides
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
            focus: "hsl(var(--primary))",
          }
        },
        dark: {
          colors: {
            background: "var(--background)", // Sync with Tailwind
            foreground: "var(--foreground)", // Sync with Tailwind
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
          }
        }
      }
    })
  ],
};
```

Key enhancements and explanations:

1. **CSS Variable Synchronization**:
   - Ensures both Tailwind and NextUI use the same `--background` and `--foreground` variables
   - Add these to your `globals.css`:
     ```css
     :root {
       --background: 0 0% 100%;       /* white */
       --foreground: 222.2 47.4% 11.2%; /* gray-900 */
       --primary: 221.2 83.2% 53.3%;   /* blue-600 */
       --primary-foreground: 210 40% 98%; /* gray-50 */
     }
     .dark {
       --background: 224 71% 4%;        /* gray-900 */
       --foreground: 213 31% 91%;       /* gray-300 */
       --primary: 217.2 91.2% 59.8%;    /* blue-500 */
     }
    