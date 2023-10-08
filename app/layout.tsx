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
        {/* The icon is from https://lucide.dev/icons/inbox and was converted to .ico
            using https://favicon.io/favicon-converter/ */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

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
