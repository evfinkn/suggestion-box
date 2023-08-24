"use client";

// Almost all of this code is copied from:
// https://github.com/radix-ui/website/blob/main/components/ThemeToggle.tsx

import { Tooltip, IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ToggleThemeButton() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <Tooltip className="radix-themes-custom-fonts" content="Toggle theme">
      <IconButton
        size="3"
        variant="ghost"
        color="gray"
        onClick={() => {
          // Set 'system' theme if the next theme matches the system theme
          const resolvedTheme = theme === "system" ? systemTheme : theme;
          const newTheme = resolvedTheme === "dark" ? "light" : "dark";
          const newThemeMatchesSystem = newTheme === systemTheme;
          setTheme(newThemeMatchesSystem ? "system" : newTheme);
        }}
      >
        <SunIcon
          width="16"
          height="16"
          style={{ display: "var(--theme-toggle-sun-icon-display)" }}
        />
        <MoonIcon
          width="16"
          height="16"
          style={{ display: "var(--theme-toggle-moon-icon-display)" }}
        />
      </IconButton>
    </Tooltip>
  );
}
