import client from "./Client";

export async function addOrder(
  user_id: number,
  product_id: number,
  items_count: number = 1
) {
  return client(
    "INSERT INTO orders (user_id,product_id, items_count) VALUES ($1,$2,$3) RETURNING *;",
    [user_id, product_id, items_count]
  );
}

export async function getOrderStatus(code: string, user_id: number) {
  return client("SELECT * FROM orders WHERE code_no=$1 AND user_id=$2", [
    code,
    user_id,
  ]);
}
