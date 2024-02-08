import { Pressable, View, Text, StyleSheet } from "react-native"

export default function PasswordItem({data, removePassword}) {
    return (
       <Pressable onLongPress={removePassword} style={styles.container}>
                <Text style={styles.text}>{data}</Text>
       </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
    },
    text: {
        color: "#FFF"

    }
})