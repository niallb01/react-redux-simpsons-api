import Character from "./Character";

const Characters = (props) => {
  const { handleSearchInput, onDelete, filteredChars, newState, onNewState } =
    props;

  // && = if characters isn't undefined then try and render characters - means characters doesn't depend on app component
  return (
    <>
      <h1 className="header">Simpsons Quote Generator</h1>
      <div className="search-restore-bar">
        <input
          className="search-input"
          placeholder="Search Character..."
          onInput={handleSearchInput}
        ></input>
        <button value={newState} onClick={onNewState} className="new-state-btn">
          New Quotes
        </button>
      </div>

      <div className="chars-container">
        {filteredChars &&
          filteredChars.map((character, position) => {
            return (
              <div className="character" key={character + position}>
                <Character
                  liked={character.liked}
                  onDelete={onDelete}
                  characterDirection={character.characterDirection}
                  nameText={character.character}
                  quoteText={character.quote}
                  image={character.image}
                  itemNo={position}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Characters;
