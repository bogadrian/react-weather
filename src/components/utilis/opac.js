import { useState, useEffect } from 'react';

const useOpac = ref => {
  const [bbox, setBbox] = useState({});
  let [opac, setO] = useState(1);

  useEffect(() => {
    if (bbox > 657 * 1) {
      setO(1);
    } else if (bbox > 550 * 1 && bbox < 697 * 1) {
      setO(0.8);
    } else if (bbox > 500 * 1 && bbox < 550 * 1) {
      setO(0.6);
    } else if (bbox > 450 * 1 && bbox < 500 * 1) {
      setO(0.4);
    } else {
      setO(0);
    }
  }, [bbox]);

  const set = () =>
    setBbox(
      ref && ref.current ? ref.current.getBoundingClientRect().y.toFixed() : {}
    );

  useEffect(() => {
    set();
    window.addEventListener('scroll', set);

    return () => window.removeEventListener('scroll', set);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return opac;
};

export default useOpac;
