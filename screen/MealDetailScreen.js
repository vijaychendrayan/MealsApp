import { useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";

function MealDetailScreen({route, navigation}){
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)
    function headerButtonPressHandler(){
        console.log('Button Pressed')
    }
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerRight: ()=> {
                return <Button title="Tap me" onPress={headerButtonPressHandler} />
            }
        })
    },[navigation, headerButtonPressHandler])
    return(
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                affordability={selectedMeal.affordability} 
                complexity={selectedMeal.affordability}
                textStyle={styles.detailText} 
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>            
                    <List data={selectedMeal.ingredients}/> 
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}   

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image:{
        width: '100%',
        height: 350,
    },
    title:{
        fontWeight: 'bold',
        fontSize:24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText:{
        color: 'white'
    },
    subtitle:{
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',        
        borderBottomColor: 'white',        
        textAlign: 'center'

    },
    subtitleContainer:{
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginVertical: 4,
        margin: 4,
        padding: 6,
    },
    listContainer:{
        width: '80%'
    },
    listOuterContainer:{
        alignItems: 'center'
    }
})