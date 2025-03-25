import { useEffect, useState } from "react";

const useFuncDebounce = value => {
  // eslint-disable-next-line react/hook-use-state
  const [debounsedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), 350);

    return () => clearTimeout(timer);
  });

  return debounsedValue;
};

export default useFuncDebounce;
