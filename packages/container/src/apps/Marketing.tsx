// @ts-ignore
import marketingMount from "marketing/app";
import { useEffect, useRef } from "react";

function Marketing() {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  }, []);

  return <div id="marketing" ref={ref} />;
}

export default Marketing;
