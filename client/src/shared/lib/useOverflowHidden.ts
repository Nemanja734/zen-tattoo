import { useEffect } from "react";

export const useOverflowHidden = (hide?: boolean) => {
  // Toggle scrolling
  useEffect(() => {    
    if (hide) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [hide]);
};
