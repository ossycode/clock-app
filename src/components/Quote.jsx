export default function Quote({ moreLess }) {
  return (
    <>
      {moreLess && (
        <div className="quote-container">
          <p className="quote">
            "The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value."
          </p>

          <p className="quote-author fnt-700">Ada Lovelace</p>
        </div>
      )}
    </>
  );
}
