import { Request, Response } from "express";
import { getAll, getById } from "../db/Product";

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getAll();

  return res.json({
    message: "success",
    body: products.rows,
  });
};

export const getSingleProduct = async (req: Request, res: Response) => {
  if (req.params.id) {
    const productId = parseInt(req.params.id);
    const product = await getById(productId);
    return res.json({
      status: "success",
      body: product.rows,
    });
  }
  // const products = await getById(req.params)
};
