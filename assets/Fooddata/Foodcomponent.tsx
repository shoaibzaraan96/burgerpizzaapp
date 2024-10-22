import { View, Image, StyleSheet, Text,Dimensions } from 'react-native';
import Food from '@/components/Food';
import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';
import AddToCart from '@/components/AddToCart';
const { width } = Dimensions.get('window');

// Item component that represents each food item in the FlatList
const Item = ({title}) => (
  <View style={{margin:10,backgroundColor:'lightgrey'}}>
    <Image source={{ uri: title.image }} style={styles.image} />
    <Text style={styles.title}>{title.title}</Text>
    <Text style={styles.price}>{title.price}</Text>
    <Link href='/components/AddToCart'  
  onPress={() => console.log("Link pressed")}
>
  Add to cart
</Link> 


  </View>
);

export default function Foodcomponent ({food}) {
 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.Container}>
        <FlatList 
          data={food}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={item => item.id.toString()}  // Ensure 'id' is a string
          numColumns={2}
          contentContainerStyle={{gap:5,padding:10}}
          columnWrapperStyle={{gap:10}}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 0.95,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
  },
  price: {
    fontSize: 18,
    color: 'black',
  },
  image: {
    width: 150,
    aspectRatio:2/1,
    
  },
  item: {
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor:'yellow'
  },
  renderItem:{
    maxWidth:'30%',
  }
   
});

  