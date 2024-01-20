import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GamecardContainer from './GamecardContainer';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, loading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 20 });

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      paddingX={2}
      spacing={6}
    >
      {loading
        ? skeletons.map((_, index) => (
            <GamecardContainer key={index}>
              <GameCardSkeleton />
            </GamecardContainer>
          ))
        : data?.map((game) => (
            <GamecardContainer key={game.id}>
              <GameCard game={game} />
            </GamecardContainer>
          ))}
    </SimpleGrid>
  );
}

export default GameGrid;
