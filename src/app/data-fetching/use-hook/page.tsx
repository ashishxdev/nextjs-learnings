import { Suspense, use } from "react";

interface Users {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

interface UsersResponse {
  users: Users[];
  total: number;
}

function getUsers(): Promise<UsersResponse> {
  // One way
  // async function getUsers() : Promise<UsersResponse>{
  // const response = await fetch("https://dummyjson.com/users");
  // return response.json()

  // Second way
  return fetch("https://dummyjson.com/users").then((res) => res.json());
}

function UseHookExample() {
  const usersPromise = getUsers();

  return (
    <div>
      <h1>Use Hook Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersList usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
}

function UsersList({ usersPromise }: { usersPromise: Promise<UsersResponse> }) {
  const getUsersList = use(usersPromise);
  return (
    <div>
      {getUsersList.users.map((user) => (
        <div key={user.id}>
          <p>
            {user.firstName} - {user.lastName}
          </p>
        </div>
      ))}
    </div>
  );
}
export default UseHookExample;
