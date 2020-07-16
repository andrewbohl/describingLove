import React, { useEffect, useState } from "react";
import { getData } from "../../lib/fetch";
import PropTypes from "prop-types";

const User = (props) => {
  const [user, setUser] = useState({
    id: null,
    name: null,
    email: null,
    permissions: null,
  });

  useEffect(() => {
    getData("/user/me")
      .then((res) => res.json())
      .then(({ data }) => {
        setUser({ ...data });
      });
  }, [user.id]);

  return <div {...props}>{(user) => props.children(user)}</div>;
};

User.propTypes = {
  children: PropTypes.func.isRequired,
};

export default User;
