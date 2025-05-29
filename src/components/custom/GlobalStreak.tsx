import Streak from "./Streak";

interface Props {
  value: number;
  label: string;
}

function GlobalStreak({ value = 0, label = "" }: Props) {
  return (
    <div>
      <label>{label}</label>
      <Streak value={value} />
    </div>
  );
}

export default GlobalStreak;
