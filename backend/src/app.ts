import express from "express";
import { dateRoute } from "./route/DateRoute";
import cors from "cors";
import { readFileSync } from 'fs';
import { join } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api-docs', (req, res) => {
  const yamlPath = join(process.cwd(), 'src', 'openapi.yaml');
  const yamlContent = readFileSync(yamlPath, 'utf-8');
  res.type('text/yaml').send(yamlContent);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Date API!");
});

app.use("/api/date", dateRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

