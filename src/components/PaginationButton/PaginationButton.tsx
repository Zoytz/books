const PaginationButton = (
  { handleSetStartIndex, isHidden }:
    { handleSetStartIndex: () => void, isHidden: boolean }) => {

  return (
    <button
      onClick={handleSetStartIndex}
      type='button'
      className={`pagination-button ${isHidden ? 'pagination-button_type_hidden ' : ''}`}
    >
      Load more
    </button>
  )
};

export default PaginationButton;