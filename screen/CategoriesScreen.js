import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data'

// function renderCategoryItem(itemData){
//     function pressHandler(){  

//     }
//     return (
//                 <CategoryGridTile 
//                     title={itemData.item.title} 
//                     color={itemData.item.color} 
//                     onPress={pressHandler}
//                 />
//     );    
// }

function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){
        // console.log('RenderCategoryItem')
        function pressHandler(){
            // console.log('pressHandler')
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }

        return(
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onPress={pressHandler}
            />
        ); 
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item)=> item.id} 
            renderItem={renderCategoryItem} 
            numColumns={2}
        />
    );
    
}

export default CategoriesScreen;