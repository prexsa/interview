import React, { useState, useEffect } from "react";

export default function AutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleOnChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 0) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const handleClick = (e) => {
    setShowDropDown(false);
    setSearchParams(e.target.innerText);
    setFilteredUsers([]);
  };

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading Data</h1>
      ) : (
        <input
          value={searchParams}
          name="search"
          placeholder="Search Users..."
          onChange={handleOnChange}
        />
      )}
      {showDropDown && (
        <ul>
          {filteredUsers && filteredUsers.length
            ? filteredUsers.map((item, index) => (
                <li onClick={handleClick} key={index}>
                  {item}
                </li>
              ))
            : null}
        </ul>
      )}
    </div>
  );
}
