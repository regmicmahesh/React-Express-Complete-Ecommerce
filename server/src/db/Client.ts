import { Pool, QueryResult } from "pg";

console.log(process.env.DPORT);
const pool = new Pool({
  database: process.env.DB,
  host: process.env.DHOST,
  port: parseInt(process.env.DPORT!),
  user: process.env.DUSER,
  password: process.env.DPASSWORD
});

interface DBQueryFunc {
  (query: string, values: any[]): Promise<QueryResult>;
}

const DBQuery: DBQueryFunc = (query, values) => {
  return new Promise((resolve, reject) => {
    pool
      .query(query, values)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export default DBQuery;
