import { useState, useEffect, useMemo } from 'react';

function AppChild(props: {
  data: string[];
  testBool: boolean;
  testObj: Object;
  onClick: (e) => void;
}) {
  const { data, testBool } = props;
  const [count, setCount] = useState(0);

  console.log('AppChild render...');

  useEffect(() => {
    setCount(count + 1);
    console.log('AppChild count...', count);
  }, []);

  const ccc = useMemo(() => {
    const arrs = [];
    console.log('AppChild render...ccc');
    while (arrs.length < 100) {
      arrs.push(arrs.length);
    }
    return arrs;
  }, [count, testBool]);

  return (
    <>
      <h1>I'm App Child</h1>
      <h2>{`data... ${props.data.join('')}`}</h2>
    </>
  );
}

export default AppChild;
