import { useEffect, useState } from "react";
import { getUsers } from "./API";
import User from "./User";
import PageButton from "./PageButton";
// import "./styles.css";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState(null);
  const [page, setPage] = useState(1);

  const fetchUserData = async (page) => {
    const userResponse = await getUsers(page);
    setUsers(userResponse);
  };
  useEffect(() => {
    fetchUserData(page);
  }, [page]);

  const setFirst = () => setPage((prevState) => prevState - 1);

  const setLast = () => setPage((nextState) => nextState + 1);

  console.log(users, "users");
  console.log(users?.total_pages, "total page");
  const pagesArray = Array(users?.total_pages)
    .fill()
    .map((_, index) => index + 1);
  const searchUsers = (name) => {
    console.log(name, "name");
    const searcheduserObj = users?.data?.find(
      (user) =>
        user.first_name.toLowerCase() === name.toLowerCase() ||
        user.last_name.toLowerCase() === name.toLowerCase()
    );

    // const searcheduserObj = users?.data?.find(
    //   (user) =>
    //     user.first_name.toLowerCase().startsWith(name) ||
    //     user.last_name.toLowerCase().startsWith(name)
    // );
    setSearchedUser(searcheduserObj);
    console.log(searcheduserObj, "search");
    console.log(users, "users");
    // setUsers(searcheduserObj);
  };
  return (
    <div className="App">
      Search Name :{" "}
      <input
        type="text"
        value={searchedUser?.first_name || searchedUser?.last_name}
        onChange={(e) => searchUsers(e.target.value)}
      />
      <button onClick={setFirst} disabled={page === 1}>
        &lt;&lt;{" "}
      </button>
      {pagesArray.map((pg) => (
        <PageButton key={pg} pg={pg} setPage={setPage} />
      ))}
      <button onClick={setLast} disabled={page === users?.total_pages}>
        &gt;&gt;{" "}
      </button>
      {searchedUser ? (
        <User key={searchedUser.id} user={searchedUser} />
      ) : (
        users?.data?.map((user, id) => <User key={user.id} user={user} />)
      )}
    </div>
  );
}
