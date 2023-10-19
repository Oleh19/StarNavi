export const updateHoveredSquares = (
  row: number,
  col: number,
  isGameStarted: boolean,
  hoveredSquares: boolean[][],
  selectedSquares: { row: number; col: number }[],
  setHoveredSquares: React.Dispatch<React.SetStateAction<boolean[][]>>,
  setSelectedSquares: React.Dispatch<
    React.SetStateAction<{ row: number; col: number }[]>
  >
) => {
  if (isGameStarted) {
    const updatedHoveredSquares = [...hoveredSquares];
    updatedHoveredSquares[row][col] = !updatedHoveredSquares[row][col];
    setHoveredSquares(updatedHoveredSquares);

    const selectedSquareIndex = selectedSquares.findIndex(
      (square: { row: number; col: number }) =>
        square.row === row && square.col === col
    );

    if (updatedHoveredSquares[row][col] && selectedSquareIndex === -1) {
      setSelectedSquares([...selectedSquares, { row, col }]);
    } else if (!updatedHoveredSquares[row][col] && selectedSquareIndex !== -1) {
      const updatedSelectedSquares = selectedSquares.filter(
        (square: { row: number; col: number }) =>
          !(square.row === row && square.col === col)
      );
      setSelectedSquares(updatedSelectedSquares);
    }
  }
};
