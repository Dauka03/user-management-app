import React, { useEffect, useState } from "react";
import User from "./user";
import { useData } from "../../utils/DataContext";
const UserList = () => {
  const { state } = useData();
  const usersToDisplay =
    state.searchResults.length > 0 ? state.searchResults : state.data;

  return (
    <div>
      {usersToDisplay.map((user, index) => (
        <User
          key={index}
          name={user.name}
          email={user.email}
          permissions={user.permissions}
          image={user.image}
        />
      ))}
    </div>
  );
};

export default UserList;
