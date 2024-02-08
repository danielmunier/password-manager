import { View, Text, StyleSheet, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import useStorage from "../../hooks/useStorage"
import { useEffect, useState } from "react"
import {useIsFocused} from "@react-navigation/native"
import PasswordItem from "./components/passwordItem"

export default function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const { getItem, removeItem } = useStorage()

    const focused = useIsFocused()

    useEffect(() => {
        async function loadPasswords() { 
            const passwords = await getItem("@pass")
            setListPasswords(passwords)

        }
    
        loadPasswords()
    }, [focused])

  async function handleDeletePassword(item) {
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text style={styles.header}>
                    <Text style={styles.title}>Your passwords</Text>
                </Text>
            </View>
       <View >
        <FlatList
        data={listPasswords}
        heyExtractor={(item) => String(item)}
        renderItem={({item}) => <PasswordItem style={styles.password} removePassword={() => handleDeletePassword(item)} data={item}/>}
        />
       </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#1A1A1A",
        padding: 50
    },
    title: {
        color: "white"
    },
    passwordsArea: {
        backgroundColor: "red"
    },
    password: {
        backgroundColor: "black",
        color: 'white',
        padding: 10
    }

})