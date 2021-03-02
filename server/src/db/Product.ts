import client from "./Client";

export async function getAll() {
  return client("SELECT * FROM products", []);
}

export async function getById(id: number) {
    return client("SELECT * FROM products where id=$1 LIMIT 1", [id]);
}