import UserList from "./components/user/UserList";
import NewUserForm from "./components/user/newuserFrom";


export default async function Home() {
  return (
    <div>
      <h1 className="text-gray-800">USER REGISTRATION</h1>
      <NewUserForm />
      <UserList />
    </div>
  );
}