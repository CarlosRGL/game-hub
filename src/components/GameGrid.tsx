import useGames from '../hooks/useGames';

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      <ul>
        {error && <li>{error.message}</li>}
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
