import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading } = useGenres();
  const skeletons = Array.from({ length: 10 }, (_, i) => i);

  if (isLoading) {
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
              objectFit={'cover'}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              whiteSpace={'normal'}
              textAlign={'left'}
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(genre)}
              variant={'link'}
              fontSize={'large'}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
