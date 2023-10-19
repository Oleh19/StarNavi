export const generateTableRows = (
  fieldSize: number,
  hoveredSquares: boolean[][],
  handleSquareHover: (row: number, col: number) => void
) => {
  const rows = [];
  for (let row = 0; row < fieldSize; row++) {
    const cols = [];
    for (let col = 0; col < fieldSize; col++) {
      const squareClass = hoveredSquares[row][col] ? 'blue' : 'white';
      cols.push(
        <td
          key={col}
          className={`square ${squareClass}`}
          onMouseEnter={() => handleSquareHover(row, col)}
        />
      );
    }
    rows.push(<tr key={row}>{cols}</tr>);
  }
  return rows;
};
