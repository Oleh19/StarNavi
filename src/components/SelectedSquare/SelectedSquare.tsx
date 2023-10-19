import { FC } from 'react';
import './selectedSquare.css';
import { v4 as uuidv4 } from 'uuid';

interface SelectedSquareProps {
  selectedSquares: { row: number; col: number }[];
}

const SelectedSquare: FC<SelectedSquareProps> = ({ selectedSquares }) => {
  return (
    <div className='selected-info'>
      <h2>Hover squares</h2>
      <ul className='listSelectedItems'>
        {selectedSquares.map((square) => (
          <li className='selectedItem' key={uuidv4()}>
            {`row ${square.row + 1}, col ${square.col + 1}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedSquare;
