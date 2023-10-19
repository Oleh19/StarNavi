import { FC } from 'react';
import { Mode } from '../../types/interfaces';
import './selectedMode.css';

interface SelectModeProps {
  handleModeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  modes: Mode[];
  handleStartButtonClick: () => void;
}

const SelectMode: FC<SelectModeProps> = ({
  handleModeChange,
  modes,
  handleStartButtonClick,
}) => {
  return (
    <div className='modes'>
      <select className='select' onChange={handleModeChange}>
        <option>Pick mode</option>
        {modes.map((mode) => (
          <option key={mode.id} value={mode.id}>
            {mode.name}
          </option>
        ))}
      </select>
      <button className='buttonStart' onClick={handleStartButtonClick}>
        START
      </button>
    </div>
  );
};

export default SelectMode;
