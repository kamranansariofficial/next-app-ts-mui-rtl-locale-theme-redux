import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import MediaCard from "@/components/MediaCard";
import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <Container fixed>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {[...new Array(20)].map(() => (
          <Grid xs={6} md={4} key={Math.random()}>
            <MediaCard
              heading={dictionary["server-component"].welcome}
              text="The CMYK color model (also known as process color, or four color) is a subtractive color model, based on the CMY color model, used in color printing, and is also used to describe the printing process itself."
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
