import { View,StyleSheet,Text } from "react-native";
function Subtitle({children}){
    return(
        <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
   
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
    }
})