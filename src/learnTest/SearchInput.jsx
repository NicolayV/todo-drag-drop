import cn from "classnames";

import classes from "./Search.module.css";

const SearchInput = (props) => {
  const {
    children = "Search",
    placeholder = "search...",
    value,
    onChange,
  } = props;

  const inputClass = cn({
    [classes.input]: true,
    [classes.filled]: value.length,
  });

  return (
    <label className={classes.label}>
      {children}
      <input
        className={inputClass}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export { SearchInput };
