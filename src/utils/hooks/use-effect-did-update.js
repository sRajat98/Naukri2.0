import React, { useEffect, useRef } from "react";

const useEffectDidUpdate = (method, dependencies) => {
  const didUpdate = useRef(false);

  useEffect(() => {
    if (didUpdate.current) method();
    else didUpdate.current = true;
  }, dependencies);
};

export default useEffectDidUpdate;
