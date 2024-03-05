let renderCount = 0;

export function RenderCount() {
  renderCount += 1;
  return (
    <div className="flex basis-1/2 flex-col items-center">
      <p>Render count: {renderCount}</p>
    </div>
  );
}
