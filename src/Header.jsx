import SearchBox from './SearchBox';
import React from "react";

const Header = ({term, setTerm}) => {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">
        Posh Properties
      </h1>

      <SearchBox term={term} setTerm={setTerm}/>
    </header>
  );
};

export default Header;
