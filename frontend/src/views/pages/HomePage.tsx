import { Box, Paper, Typography } from "@mui/material";
import { DashboardLayout } from "../shared/layout/DashboardLayout";
import { ResumeForm } from "../features/ResumeForm";

export function HomePage() {
  return (
    <DashboardLayout>
      <Box
        display="grid"
        width="100%"
        height="100%"
        gridTemplateColumns="1fr 1fr"
        columnGap={2}
      >
        <Paper sx={{ p: 2 }}>
          <Typography>
            Envie o currículo (PDF) que deseja analizar e um printscreen da vaga
            para a qual deseja aplicar
          </Typography>

          <ResumeForm />
        </Paper>

        <Paper sx={{ p: 2 }}></Paper>
      </Box>
    </DashboardLayout>
  );
}
