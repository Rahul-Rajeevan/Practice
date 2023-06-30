import React, { useMemo, useEffect } from 'react';

const MyComponent1 = () => {
  const apiResponse = useMemo(async () => {
    console.log('Fetching API data...');
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  }, []);

  useEffect(() => {
    // Access and use the 'apiResponse' here or perform any other side effects
    console.log('API response:', apiResponse);
  }, [apiResponse]);

  return (
    <div>
      {/* JSX representing the component's UI */}
    </div>
  );
};

export default MyComponent1;
