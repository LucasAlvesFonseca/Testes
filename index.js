const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


const userRoute = require("./SRC/Routes/user.routes")

app.use("/soma", userRoute)

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});
