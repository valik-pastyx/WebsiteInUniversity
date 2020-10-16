import React from "react";
import { Route } from "react-router-dom";
import BooksContainer from "../components/Content/Books/BooksContainer";
import TicketRegistrationContainer from "../components/Content/TicketRegistration/TicketRegistrationContainer";

const BooksPage = () => {
  return (
    <div>
      <Route path="/books" render={() => <BooksContainer />} />
      <Route
        path="/ticket_registration"
        render={() => <TicketRegistrationContainer />}
      />
    </div>
  );
};

export default BooksPage;
