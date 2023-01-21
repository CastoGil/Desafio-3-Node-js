import server from "./services/server.js";
//Servidor Escuchando//
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("server listening on port", PORT));
server.on("error", (error) => {
    console.log("Server Error Catch!", error);
  });