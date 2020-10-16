import React from "react";
import { Route } from "react-router-dom";
import RegistrationContainer from "../components/Account/Login/Registration/RegistrationContainer";
import EntryContainer from "../components/Account/Login/Entry/EntryContainer";
import AccountContainer from "../components/Account/AccountContainer";

const AccountPage = () => {
  return (
    <div>
      <Route path="/registration" render={() => <RegistrationContainer />} />
      <Route path="/entry" render={() => <EntryContainer />} />
      <Route path="/account" render={() => <AccountContainer />} />
    </div>
  );
};

export default AccountPage;
