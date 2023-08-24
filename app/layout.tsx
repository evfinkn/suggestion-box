import "@radix-ui/themes/styles.css";

import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* This style block makes the ToggleThemeButton work and is copied from:
            https://github.com/radix-ui/website/blob/main/components/ThemeToggle.tsx */}
        <style>{`
          :root, .light, .light-theme {
            --theme-toggle-sun-icon-display: block;
            --theme-toggle-moon-icon-display: none;
          }
          .dark, .dark-theme {
            --theme-toggle-sun-icon-display: none;
            --theme-toggle-moon-icon-display: block;
          }
        `}</style>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
