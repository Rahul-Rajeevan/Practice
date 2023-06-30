import React, { useMemo } from 'react';

const AverageComponent = ({ data }) => {
  const average = useMemo(() => {
    console.log('Calculating average...');
    const sum = data.reduce((acc, curr) => acc + curr, 0);
    return sum / data.length;
  }, [data]);

  return (
    <div>
      <p>Data: {data.join(', ')}</p>
      <p>Average: {average}</p>
    </div>
  );
};

export default AverageComponent;
