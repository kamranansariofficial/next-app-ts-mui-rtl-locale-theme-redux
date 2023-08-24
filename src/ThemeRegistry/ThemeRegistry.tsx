"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { useSelector, darkMode } from "@/lib/redux";
import * as locales from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const Localization = (lang: string) => {
  switch (lang) {
    case "ar":
      return "arEG";
    case "fr":
      return "frFR";
    case "en":
      return "enUS";
    default:
      return "frFR";
  }
};

export default function ThemeRegistry({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang?: string;
}) {
  const isDarkMode = useSelector(darkMode);
  console.log(lang, "lang");
  const locale = Localization(lang as string);
  const dir = lang === "ar" ? "rtl" : "ltr";
  // styleCache.compat = true;
  const FONT_PRIMARY: string = "'Poppins', sans-serif"; // Google Font
  const FONT_SECONDARY: string = "'Noto Kufi Arabic', sans-serif"; // Google Font

  const themeWithLocale = React.useMemo(
    () =>
      createTheme(
        {
          palette: isDarkMode
            ? { ...palette.dark, mode: "dark" }
            : { ...palette.light, mode: "light" },

          direction: "ltr",
          // customShadows: isDark ? customShadows.light : customShadows.dark,
        },
        locales[locale]
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDarkMode]
  );
  return (
    <NextAppDirEmotionCacheProvider
      // { key: "mui" }
      options={{
        key: dir === "rtl" ? "muirtl" : "css",
        stylisPlugins: dir === "rtl" ? [prefixer, rtlPlugin] : [],
      }}
    >
      <ThemeProvider theme={themeWithLocale}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <main dir={dir}>{children}</main>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
