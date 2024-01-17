import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
  const sortOrders = [
    { value: 'relevance', label: 'relevance' },
    { value: '-added', label: 'release date' },
    { value: 'name', label: 'name ' },
    { value: '-released', label: 'release date' },
    { value: '-metacritic', label: 'metacritic' },
    { value: '-rating', label: 'rating' },
  ];
  const currentSortOrder = sortOrders.find((o) => o.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by {currentSortOrder?.label || 'relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
