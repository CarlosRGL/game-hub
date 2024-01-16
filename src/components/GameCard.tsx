import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image
        src={
          game.background_image
            ? getCroppedImageUrl(game.background_image)
            : 'https://via.placeholder.com/600x400'
        }
        alt={game.name}
      />
      <CardBody>
        <Heading fontSize="2xl" as="h2">
          {game.name}
        </Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
