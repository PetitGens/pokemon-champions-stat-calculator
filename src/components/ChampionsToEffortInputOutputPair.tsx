import { useState } from 'preact/hooks';
import { convertChampionsStatPointsToEffortValue } from '../lib/stat-converter';

interface Props {
  stat: string;
}

export function ChampionsToEffortInputOutputPair(props: Props) {
  const { stat } = props;

  const [outputValue, setOutputValue] = useState(0);

  function onInputChange(value: string) {
    if (value === '') {
      setOutputValue(0);
      return;
    }

    const parsedValue = Number.parseInt(value);
    if (isNaN(parsedValue)) return;
    const effortValue = convertChampionsStatPointsToEffortValue(parsedValue);
    setOutputValue(effortValue ?? 0);
  }

  return (
    <tr>
      <td>
        <label htmlFor={`input-champions-${stat}`}>{stat}</label>
      </td>
      <td>
        <input
          id={`input-champions-${stat}`}
          type="number"
          min={0}
          max={32}
          onChange={(event) => onInputChange(event.currentTarget.value)}
        />
      </td>
      <td>
        <label htmlFor={`output-effort-${stat}`}>{stat}</label>
      </td>
      <td>
        <input
          id={`output-effort-${stat}`}
          type="text"
          readOnly
          value={outputValue}
        />
      </td>
    </tr>
  );
}
