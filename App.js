import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList, Image, TouchableOpacity,TextInput } from 'react-native';
import CustomList from './components/listComponent';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [ListData1, setListData1] = useState([
    { name: 'Burger', imageUri: 'https://th.bing.com/th/id/OIP.SkRQhXazyj2qnETRZ8ChFwHaDI?rs=1&pid=ImgDetMain' },
    { name: 'Kebab', imageUri: 'https://th.bing.com/th/id/OIP.0u5492UieD2FKhjNIpH9CgHaHa?rs=1&pid=ImgDetMain', price: '12.00', rating: '4.9' },
    { name: 'Fries', imageUri: 'https://th.bing.com/th/id/OIP.cJGVhWbKgg0NQypCeEaNMAHaHa?rs=1&pid=ImgDetMain', price: '12.00', rating: '4.9' },
    
  ]);

  const [ListData2, setListData2] = useState([
    { name: 'Monsterra Patty', imageUri: 'https://th.bing.com/th/id/R.f36697ada7de16faeb4bb628ef0e6201?rik=vdWkw4x71fDu3g&riu=http%3a%2f%2fimages.deliveryhero.io%2fimage%2ffoodpanda%2frecipes%2fburger-patty-recipe-1.jpg&ehk=sesj%2fDGeX0SduG9dozXAhgQPnYFyXufRw3f5ExodYzU%3d&risl=&pid=ImgRaw&r=0', price: '15.00', rating: '4.6' },
    { name: 'Hukl Burger', imageUri: 'https://i.pinimg.com/736x/ff/0b/37/ff0b37ad12caacbc6d73a68fac25824c--big-burgers-burger-recipes.jpg', price: '12.00', rating: '4.9' },
    { name: 'Bacon Burger', imageUri: 'https://th.bing.com/th/id/R.0455d35f0d089df98e9899339525ba16?rik=RMUk6UI0hgWcmA&pid=ImgRaw&r=0', price: '25.00', rating: '4.9' },
    { name: 'Monsterra Patty', imageUri: 'https://i.pinimg.com/originals/cc/f9/5d/ccf95d47b1d3825e1ac6631b5fb056c7.jpg', price: '15.00', rating: '4.6' },
   
  ]);

  const [ListData3, setListData3] = useState([
    { name: 'Vege Burger', imageUri: 'https://th.bing.com/th/id/R.0455d35f0d089df98e9899339525ba16?rik=RMUk6UI0hgWcmA&pid=ImgRaw&r=0', price: '25.00', rating: '4.9' },
    { name: 'Monsterra Patty', imageUri: 'https://i.pinimg.com/originals/cc/f9/5d/ccf95d47b1d3825e1ac6631b5fb056c7.jpg', price: '15.00', rating: '4.6' },
    { name: 'Monsterra Patty', imageUri: 'https://th.bing.com/th/id/R.f36697ada7de16faeb4bb628ef0e6201?rik=vdWkw4x71fDu3g&riu=http%3a%2f%2fimages.deliveryhero.io%2fimage%2ffoodpanda%2frecipes%2fburger-patty-recipe-1.jpg&ehk=sesj%2fDGeX0SduG9dozXAhgQPnYFyXufRw3f5ExodYzU%3d&risl=&pid=ImgRaw&r=0', price: '15.00', rating: '4.6' },
    { name: 'Hukl Burger', imageUri: 'https://i.pinimg.com/736x/ff/0b/37/ff0b37ad12caacbc6d73a68fac25824c--big-burgers-burger-recipes.jpg', price: '12.00', rating: '4.9' },
    { name: 'Monsterra Patty', imageUri: 'https://th.bing.com/th/id/R.f36697ada7de16faeb4bb628ef0e6201?rik=vdWkw4x71fDu3g&riu=http%3a%2f%2fimages.deliveryhero.io%2fimage%2ffoodpanda%2frecipes%2fburger-patty-recipe-1.jpg&ehk=sesj%2fDGeX0SduG9dozXAhgQPnYFyXufRw3f5ExodYzU%3d&risl=&pid=ImgRaw&r=0', price: '15.00', rating: '4.6' },
    { name: 'Hukl Burger', imageUri: 'https://i.pinimg.com/736x/ff/0b/37/ff0b37ad12caacbc6d73a68fac25824c--big-burgers-burger-recipes.jpg', price: '12.00', rating: '4.9' },
  
  ]);
  const handleSearch = (text) => {
    setSearchQuery(text);};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.headerText}>Hello Tajamal Shah!</Text>
 
  <TextInput
        style={styles.searchBar}
        placeholder="Search your fav food"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Food Category</Text>
        <CustomList data={ListData1} horizontal={true} />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Popular Food</Text>
        <CustomList data={ListData2} horizontal={true} />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Best Seller</Text>
        <CustomList data={ListData3} horizontal={false} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: 'pink', 
    color: '#000',
  },
  sectionContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    fontSize: 18,
    borderColor: '#DDD',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    margin: 20,
    backgroundColor: '#FFF', 
  },
 
});
