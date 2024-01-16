import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Order by relevance</MenuItem>
        <MenuItem>Order by release date</MenuItem>
        <MenuItem>Order by rating</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
