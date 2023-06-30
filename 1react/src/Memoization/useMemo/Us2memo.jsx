import React, { useState, useEffect, useMemo } from 'react';

const MyComponent2 = () => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching API data...');
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setApiResponse(data);
    };

    fetchData();
  }, []);

  const memoizedApiResponse = useMemo(() => apiResponse, [apiResponse]);

  return (
    <div>
      {/* Render component using memoizedApiResponse */}
    </div>
  );
};

export default MyComponent2;
