import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import "../../style/mainbody.css";

function SearchButton({ users, onSearch }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024) {
        setIsSearchOpen(true);
      } else {
        setIsSearchOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    const results = users.filter((user) =>
      user.email.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(results);

    onSearch(results);
  };

  return (
    <Box>
      <InputGroup>
        {isSearchOpen && (
          <div className="a">
            <Input
              width={"40vw"}
              type="text"
              placeholder="Поиск по Email"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
        )}
        <InputRightElement width="4.5rem">
          <Button size="sm" onClick={handleSearchClick}>
            {isSearchOpen ? <SearchIcon /> : <SearchIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default SearchButton;
