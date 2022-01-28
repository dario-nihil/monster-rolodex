import "./search-box.style.css";

export const SearchBox = ({ placeholders, handlerChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholders}
      onChange={(e) => handlerChange(e.target.value)}
    />
  );
};
