import { useEffect } from "react";

const useDisabledBodyScroll = (visibilityState) => {
  useEffect(() => {
    if (visibilityState) return (document.body.style.overflow = "hidden");
    return (document.body.style.overflow = "unset");
  }, [visibilityState]);
};

export default useDisabledBodyScroll;
