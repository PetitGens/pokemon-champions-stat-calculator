import { ChampionsToEffortInputOutputPair } from './ChampionsToEffortInputOutputPair';

const stats = [
  'HP',
  'Attack',
  'Defense',
  'Special Attack',
  'Special Defense',
  'Speed',
];

export function ChampionsToEffortTable() {
  return (
    <form>
      <table>
        <tbody>
          {stats.map((label, index) => (
            <ChampionsToEffortInputOutputPair stat={label} key={index} />
          ))}
        </tbody>
      </table>
    </form>
  );
}
