import express from "express";
import { sequelize } from "./db.js";
import produtoRoutes from "./routes/produtoRoutes.js";
import { estruturaSwagger } from "./swagger.js";
import { seedDatabase } from "./seed.js"


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

//Alteracao de Urls:
app.use("/api/produtos", produtoRoutes);

//Integracao do Swagger:
estruturaSwagger(app);

async function main() {
    try {
        await sequelize.authenticate();
        console.log("Sucesso ao Conectar ao MySQL");
        await sequelize.sync();
        console.log("Tabelas Organizadas")
        await seedDatabase();
        console.log("Tabelas Populadas")
        app.listen(PORT, () => {
            console.log(`O servidor está rodando na porta ${PORT}`);
        });
    }
    catch (err) {
        console.error("MySQL nao conectado: ", err.code, err.message);
    }
}
main();









