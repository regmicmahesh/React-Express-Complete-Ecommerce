import client from "./Client";

interface UserCredentials {
  username: string;
  password: string;
}

interface LoginUserCredentials extends UserCredentials {}

interface RegisterUserCredentials extends UserCredentials {}

export async function register({ username, password }: LoginUserCredentials) {
  return client(
    "INSERT INTO users(username, password) VALUES($1, crypt($2, gen_salt('bf')));",
    [username, password]
  );
}

export async function login({ username, password }: RegisterUserCredentials) {
  return client(
    "select  * from users where username=$1 AND password=crypt($2,password);",
    [username, password]
  );
}

export async function getUserByUsername(username: string) {
  return client("SELECT * from users where username=$1", [username]);
}

export async function getUserById(id: number) {
  return client("SELECT * from users where id=$1", [id]);
}
