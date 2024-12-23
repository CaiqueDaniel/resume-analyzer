import { Box, Button, FormControl, FormLabel, Input } from "@mui/material";

export function ResumeForm() {
  return (
    <form>
      <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap={2}>
        <FormControl>
          <FormLabel>Currículo:</FormLabel>
          <Input type="file" name="resume" />
        </FormControl>

        <FormControl>
          <FormLabel>Printscreen da vaga:</FormLabel>
          <Input type="file" name="print" />
        </FormControl>
      </Box>
      <Button type="submit">Analisar</Button>
    </form>
  );
}
