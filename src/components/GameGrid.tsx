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
  if (loading) {
    return (
      <>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          paddingX={2}
          spacing={3}
        >
          {skeletons.map((skeleton) => (
            <GamecardContainer key={skeleton}>
              <GameCardSkeleton />
            </GamecardContainer>
          ))}
        </SimpleGrid>
      </>
    );
  }
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingX={2}
        spacing={6}
      >
        {data?.map((game) => (
          <GamecardContainer key={game.id}>
            <GameCard game={game} />
          </GamecardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
