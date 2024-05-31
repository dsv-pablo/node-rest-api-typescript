import { server } from "./server/Server";
import "dotenv/config";

server.listen(process.env.PORT || 5050, () => {
  console.log(`Server rodando na porta ${process.env.PORT || 5050}`);
});
