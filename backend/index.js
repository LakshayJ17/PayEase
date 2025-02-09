const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ["http://localhost:3000", "https://pay-ease-delta.vercel.app"],  
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());


// Any request to /api/v1 path is forwarded to the mainRouter
// This creates a base URL structure for your API (e.g., http://yourserver.com/api/v1/...)
app.use("/api/v1", rootRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
