import { FC } from 'react';
import './square.css';
import { generateTableRows } from '../../utils/generateTableRows';

interface SquareProps {
  fieldSize: number;
  hoveredSquares: boolean[][];
  handleSquareHover: (row: number, col: number) => void;
}

const Square: FC<SquareProps> = ({
  fieldSize,
  hoveredSquares,
  handleSquareHover,
}) => {
  const tableRows = generateTableRows(
    fieldSize,
    hoveredSquares,
    handleSquareHover
  );

  return (
    <div className='field-container'>
      <table className='field'>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default Square;
