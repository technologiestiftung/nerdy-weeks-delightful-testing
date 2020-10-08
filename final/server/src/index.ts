import { app } from "./server";
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/api`);
});
