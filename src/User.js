import react from "react";

const User = ({ user }) => {
  console.log(user, "user comp");
  return (
    <article>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <p>User Id: {user.id}</p>
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <p>Email : {user.email}</p>
    </article>
  );
};

export default User;
