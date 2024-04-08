import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://127.0.0.1:7116/api/AvailableSignalPorts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Data from API:</Text>
      <View>
        {data.map(item => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
};

export default App;
