import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./Cart";
import Header from "./Header";
import Search from "./Search";
import ListingContainer from "./ListingContainer";
import ListingsForm from "./ListingsForm";
import ListingDetails from "./ListingDetails";

const MainPage = ({
  currentUser,
  setCurrentUser,
  listings,
  setListings,
  searchInput,
  setSearchInput,
  searchItems,
  handleClick,
  deleteById,
}) => {

  return (
    <div>
      <Search searchItems={searchItems} searchInput={searchInput} />
      <ListingContainer
        listings={listings}
        deleteById={deleteById}
        handleClick={handleClick}
        searchInput={searchInput}
      />
    </div>
  );
};

export default MainPage;
