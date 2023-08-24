"use client";
import { usePathname, useRouter } from "next/navigation";
import { i18n } from "i18n-config";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface LangProps {
  name: string;
  code: string;
}
const languages: LangProps[] = [
  {
    name: "English",
    code: "en",
  },
  {
    name: "German",
    code: "de",
  },
  {
    name: "Czech",
    code: "cs",
  },
  {
    name: "Arabic",
    code: "ar",
  },
];

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = event.target.value;
    router.push(segments.join("/"));
  };

  return (
    <FormControl fullWidth>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={pathName?.split("/")[1]}
        onChange={handleChange}
      >
        {i18n.locales.map((locale) => (
          <MenuItem value={locale}>
            {languages.find((item: LangProps) => item.code === locale)?.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
