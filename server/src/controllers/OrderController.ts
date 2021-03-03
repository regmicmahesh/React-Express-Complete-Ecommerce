import { Request, Response } from "express";
import { addOrder, getOrderStatus } from "../db/Order";
export type ValidatedRequest = Request & { user: any };

export async function addSingleOrderController(req: Request, res: Response) {
  const { id } = (req as any).user;
  const { item_id, item_count } = req.body;

  const order_status = await addOrder(id, item_id, item_count);

  return res.json({
    status: "success",
    body: order_status.rows,
  });
}

export async function getOrderStatusController(req: Request, res: Response) {
  const { id } = (req as any).user;
  const { code } = req.params;

  const status = await getOrderStatus(code, id);

  if (status.rowCount == 0) {
    return res.json({
      status: "fail",
      message: "Unauthorized",
    });
  } else {
    return res.json({
      status: "success",
      body: status.rows,
    });
  }
}
