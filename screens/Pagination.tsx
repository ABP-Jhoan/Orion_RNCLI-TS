import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const PaginationExample: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
  
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products`);
        const newData = response.data;
  
        // Verifica si hay más datos disponibles
        if (newData.length === 0) {
          setHasMore(false);
        }
  
        // Combina los nuevos datos con los existentes
        setData((prevData) => [...prevData, ...newData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleEndReached = () => {
      if (!loading && hasMore) {
        setPage(page + 1);
      }
    };
  
    const renderItem = ({ item }: { item: any }) => (
      <View>
        <Text>{item.title}</Text>
        {/* Agrega más información según la estructura de tus datos */}
      </View>
    );
  
    useEffect(() => {
      fetchData(); // ¡Agrega esta línea para cargar datos al montar el componente!
    }, []); // El array vacío asegura que esto solo se ejecute al montar el componente
  
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{backgroundColor: '#adc123', flex: 1}}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => (loading ? <ActivityIndicator size="large" color="#0000ff" /> : null)}
        />
      </View>
    );
  };
  
  export default PaginationExample;
  