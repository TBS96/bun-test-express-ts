import { app } from "./app.ts";
import conf from "./conf/conf.ts";
import connectDB from "./db/index.ts";

const PORT = conf.port || 8000;

connectDB()
    .then(() => {
        const server = app.listen(PORT, () => {
            console.log(`Bun server is running at http://127.0.0.1:${PORT}`);
        });

        server.on('error', (err) => {
            console.error('SERVER ERROR: ', err);
            process.exit(1);
        })
    })
    .catch((err) => {
        console.error('MONGODB CONN. FAILED!!: ',err);
        process.exit(1);
    });