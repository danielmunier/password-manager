import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import Slider from "@react-native-community/slider"
import {useState} from "react"
import ModalPassword from '../../components/modal/';


export default function Home() {
  const [size, setSize] = useState(10)
  const [password, setPassword] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  const generatePassword = (size) => {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$^&*";
    var password = "";
  
    for (var i = 0; i < size; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    setPassword(password)
    setModalVisible(true)
    return password
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gere a senha clicando no gato burro</Text>
      <Pressable onPress={() => generatePassword(size)}>
      <Image
        onPress={() => generatePassword(size)}
        style={styles.image}
        source={require("../../assets/dumblikecat.jpg")}
      />
      </Pressable>
     
      <Text style={styles.text}>{size} caracteres</Text>

      <View style={styles.area} >
      <Slider
        style={{height: 50, width: 200}}
        minimumValue={8}
        maximumValue={20}
        minimumTrackTintColor='black'
        maximumTrackTintColor="white"
        thumbTintColor='white'
        value={size}
        onValueChange={(value) => setSize(value.toFixed(0))}
      />

      </View>


     <Modal visible={modalVisible} animationType="fade" transparent={true}>
         <ModalPassword password={password} handleClose={() => {setModalVisible(false)}}/>
     </Modal>

   
   
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
    padding: 10,
    marginTop: 10
  },
  area: {
    backgroundColor: "#3b3a3a",
    borderRadius: 8,
    padding: 8,
    marginTop: 14,
    marginBottom: 14,
    
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8
  },
  button: {
    backgroundColor: "#7b04c7",
    padding: 10,
    borderRadius: 4,
    width: "40%",
    alignItems: "center"
  },
  buttonColor: {
    color: "white",
    fontSize: 18
  }
})
