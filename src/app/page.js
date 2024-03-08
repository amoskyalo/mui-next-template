'use client';

import { Chip, Box, Link, Stack, Typography, Grid, Card, CardContent } from "@mui/material";
import { ThemeContext } from "@/Theme/config";
import { useContext } from "react";
import MaterilLogo from '../Assets/material.png';
import Image from "next/image";
import styles from "./page.module.css";
import MaterialUISwitch from "@/Components/Switch/MaterialUISwitch";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
  const { toggleColorMode, mode } = useContext(ThemeContext);

  const DocumentationCard = ({ link, title, description }) => (
    <Grid item lg={4} xs={12}>
      <Card variant="outlined">
        <CardContent>
          <Link href={link} target="_blank" rel="noopener">
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="h6" sx={{ fontSize: 16 }}>{title}</Typography>
              <ArrowRightAltIcon fontSize="small" />
            </Stack>
          </Link>
          <Typography variant="h6" sx={{ fontSize: 14, mt: 1 }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <main className={styles.main}>
      <Box
        sx={{
          width: 900,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          <Chip
            variant="outlined"
            label="Get started by editing&nbsp;src/app/page.js"
          />
          <MaterialUISwitch
            label={mode}
            checked={mode === 'dark'}
            onChange={toggleColorMode}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: 6
          }}
        >
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
            style={{
              filter: mode === "dark" ? "invert(1) drop-shadow(0 0 0.3rem #ffffff70)" : null
            }}
          />

          <AddIcon fontSize="large" />

          <Image
            src={MaterilLogo}
            alt="Next.js Logo"
            width={85}
            height={85}
            priority
          />
        </Box>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          <DocumentationCard
            link="https://mui.com/material-ui/getting-started/"
            title="MUI Docs"
            description="Find in-depth about ready to use material design components!"
          />
          <DocumentationCard
            link="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            title="Next Docs"
            description="Find in-depth information about Next.js features and API."
          />
          <DocumentationCard
            link="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            title="Next Learn"
            description="Learn about Next.js in an interactive course with&nbsp;quizzes!"
          />
          <DocumentationCard
            link="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            title="Next Templates"
            description="Explore customizable starter templates for Next.js."
          />
          <DocumentationCard
            link="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            title="Next Deploy"
            description="Instantly deploy your Next.js site to a shareable URL with Vercel."
          />
        </Grid>
      </Box>
    </main>
  );
}
