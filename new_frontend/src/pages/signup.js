import React, { Fragment } from "react";
import Signup from "../components/ProfileMangement/Signup";
import Signin from "../components/ProfileMangement/Signin"

function signup() {
  return (
    <Fragment>
      <Signup />
      <Signin />
    </Fragment>
  );
}
export default signup;
