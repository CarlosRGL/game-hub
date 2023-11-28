import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

function GenreList() {
  const { data, loading } = useGenres();

  if (loading) {
    return <Spinner />;
  }
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={'8px'}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={'large'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
