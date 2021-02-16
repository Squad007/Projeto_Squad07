import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%",
        
        backgroundColor: 'black',
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color: "white",
        fontSize: 32
    },
    inputs: {
        width: "100%",
        padding: 8
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        padding: 8,
        marginTop: 12,
        borderRadius: 8,
        
        
        
    },
    btn:{
        backgroundColor: "#00BFFF",
        marginTop: 12,
        padding: 10,
        borderRadius: 4,
        marginLeft:50,
        marginRight:50,
        
    },
    texto:{
        fontSize: 18,
        color: "white",
        textAlign: 'center'
    },
    tinyLogo: {
        width: '50vw',
        height: '50vh',
        
      },
})

export default styles;