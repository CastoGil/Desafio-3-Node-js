import express from "express";
import productManager from "../controller/productManager.js";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  const limit = parseInt(req.query.limit);
  try {
    const products = await productManager.getProducts();
    if (!limit) {
      return res.status(200).json({ products });
    }
    if (limit > products.length) {
      return res.status(400).send("No existen tantos productos");
    } else {
      return res.send(products.slice(0, limit));
    }
  } catch (error) {
    return res.status(404).send("La ruta no se encontro")
  }
});

app.get("/products/:pid", async (req, res) => {
  const pid = parseInt(req.params.pid);
  try {
    if (!pid) {
      return res.status(404).send("Ingresa un id valido");
    }
    const productId = await productManager.getProductById(pid);
    return res.send(productId);
  } catch (error) {
    return res.status(404).send("el id no existe");
  }
});
export default app;