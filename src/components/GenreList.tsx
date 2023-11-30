import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

function GenreList() {
  const { data, loading } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (loading) {
    return (
      <List>
        {skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY={'5px'}>
            <HStack>
              <Skeleton
                height={'32px'}
                width={'32px'}
                borderRadius={'8px'}
                flexShrink={0}
              />
              <SkeletonText noOfLines={2} height={'30px'} width={'100%'} />
            </HStack>
          </ListItem>
        ))}
      </List>
    );
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
