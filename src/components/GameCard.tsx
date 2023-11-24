import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl" as="h2">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
