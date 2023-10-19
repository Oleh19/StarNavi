import { useState, useEffect, FC } from 'react';
import axios from 'axios';
import Square from '../../components/Square/Square';
import { URL } from '../../api/consts';
import SelectMode from '../../components/SelectedMode/SelectedMode';
import SelectedSquare from '../../components/SelectedSquare/SelectedSquare';
import { Mode } from '../../types/interfaces';
import './home.css';
import { updateHoveredSquares } from '../../utils/updateHoveredSquares';

const Home: FC = () => {
  const [modes, setModes] = useState<Mode[]>([]);
  const [selectedMode, setSelectedMode] = useState<string>('');
  const [fieldSize, setFieldSize] = useState<number>(0);
  const [hoveredSquares, setHoveredSquares] = useState<boolean[][]>([[]]);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [selectedSquares, setSelectedSquares] = useState<
    { row: number; col: number }[]
  >([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setModes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching modes:', error);
      });
  }, []);

  const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModeId: string = event.target.value;
    const mode: Mode | undefined = modes.find(
      (mode: Mode) => mode.id === selectedModeId
    );
    if (mode && mode.name) {
      setSelectedMode(mode.name);
      setFieldSize(mode.field);
      setHoveredSquares(
        Array.from({ length: mode.field }, () =>
          Array<boolean>(mode.field).fill(false)
        )
      );
      setSelectedSquares([]);
    }
  };

  const handleStartButtonClick = () => {
    setIsGameStarted(true);
  };

  const handleSquareHover = (row: number, col: number) => {
    updateHoveredSquares(
      row,
      col,
      isGameStarted,
      hoveredSquares,
      selectedSquares,
      setHoveredSquares,
      setSelectedSquares
    );
  };

  return (
    <div className='wrapper'>
      <SelectMode
        handleModeChange={handleModeChange}
        handleStartButtonClick={handleStartButtonClick}
        modes={modes}
      />
      {selectedMode && isGameStarted && (
        <div className='container'>
          <Square
            fieldSize={fieldSize}
            hoveredSquares={hoveredSquares}
            handleSquareHover={handleSquareHover}
          />
          <SelectedSquare selectedSquares={selectedSquares} />
        </div>
      )}
    </div>
  );
};

export default Home;
