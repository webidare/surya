import { type ThemeConfig } from "@/components/ui/theme-provider"

export const themeConfig: ThemeConfig = {
  theme: {
    extend: {
      colors: {
        border: "hsl(346.8 77.2% 49.8%)",
        input: "hsl(346.8 77.2% 49.8%)",
        ring: "hsl(346.8 77.2% 49.8%)",
        background: "hsl(0 100% 100%)",
        foreground: "hsl(346.8 77.2% 49.8%)",
        primary: {
          DEFAULT: "hsl(346.8 77.2% 49.8%)",
          foreground: "hsl(0 100% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(346.8 100% 94.9%)",
          foreground: "hsl(346.8 77.2% 49.8%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(0 100% 100%)",
        },
        muted: {
          DEFAULT: "hsl(346.8 100% 94.9%)",
          foreground: "hsl(346.8 77.2% 49.8%)",
        },
        accent: {
          DEFAULT: "hsl(346.8 100% 94.9%)",
          foreground: "hsl(346.8 77.2% 49.8%)",
        },
        popover: {
          DEFAULT: "hsl(0 100% 100%)",
          foreground: "hsl(346.8 77.2% 49.8%)",
        },
        card: {
          DEFAULT: "hsl(0 100% 100%)",
          foreground: "hsl(346.8 77.2% 49.8%)",
        },
      },
    },
  },
}
