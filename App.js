import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';

import FavoritesScreen from './screen/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import CategoriesScreen from './screen/CategoriesScreen';
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealDetailScreen from './screen/MealDetailScreen';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation(){
  return(
    <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} 
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size})=> (<Ionicons name="list" color={color} size={size} />),
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} 
        options={{
          title: 'Favorites',
          drawerIcon: ({color, size})=> (<Ionicons name="star" color={color} size={size} />),
        }}
      />
    </Drawer.Navigator>
  )
}



export default function App() {
  return (
    <>
      <StatusBar style='light' />
        {/* <FavoritesContextProvider> */}
        <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerStyle: { backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25'}
            }}
          >
            <Stack.Screen 
              name="Drawer" 
              component={DrawerNavigation}
              options={{
                headerShown: false            
                }
              }
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen}
              options={{
                title: 'About the Meal'
              }}/>
          </Stack.Navigator>      
        </NavigationContainer>
        </Provider>
      {/* </FavoritesContextProvider> */}
    </>    
  );
}

const styles = StyleSheet.create({
  container: {},
});
