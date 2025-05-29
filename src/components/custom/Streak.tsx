function Streak({ value }: { value: number }) {
  const successCount = Array(7).fill(false);
  for (let i = 0; i < value; i++) {
    successCount[i] = true;
  }
  return (
    <div className="flex py-2 gap-3 w-80">
      {successCount.map((count, index) => (
        <div key={index} className={`rounded-full w-8 h-8 border-1 ${count ? "bg-lime-600 border-lime-600" : "bg-neutral-200 border-neutral-200"}`} />
      ))}
    </div>
  );
}

export default Streak;
