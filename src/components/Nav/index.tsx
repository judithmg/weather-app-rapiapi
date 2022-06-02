import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import * as Colors from 'src/constants/colors';
import useStore from 'src/store/store';
import styled from 'styled-components';

import Dropdown from './Dropdown';
import Search from './Search';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${Colors.black};
  z-index: 1;
`;

const Nav: React.FC = () => {
  const [isDropdown, setDropdown] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const cities = useStore((state) => state.cities);

  const openMenu = () => setSearch(!isSearch);

  return (
    <NavBar>
      <Hamburger
        toggled={isDropdown}
        toggle={setDropdown}
        color={Colors.white}
      />
      <IoSearch
        size={44}
        color={Colors.white}
        onClick={openMenu}
        style={{ cursor: 'pointer' }}
      />
      {isDropdown && <Dropdown cities={cities} setDropdown={setDropdown} />}
      {isSearch && <Search setSearch={setSearch} />}
    </NavBar>
  );
};

export default Nav;
