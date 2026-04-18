const stats = [
  "HP",
  "Attack",
  "Defense",
  "Special Attack",
  "Special Defense",
  "Speed",
];

export function ChampionsToEffortTable() {
  return (
    <form>
      <table>
        <tbody>
          {stats.map((label, index) => (
            <tr key={index}>
              <td>
                <label htmlFor={`input-champions-${label}`}>{label}</label>
              </td>
              <td>
                <input
                  id={`input-champions-${label}`}
                  type="number"
                  min={0}
                  max={32}
                />
              </td>
              <td>
                <label htmlFor={`effort-${label}`}>{label}</label>
              </td>
              <td>
                <input id={`effort-${label}`} type="text" readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}
