import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
const Headline = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.publisher}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          ></Image>
          <Text style={styles.name}>Baller Crew</Text>
        </View>
        <Text style={styles.date}>3.24.2021</Text>
      </View>
      <Text style={styles.title}>
        Лейкерсийн солилцооны талаархи Фрейк Вогелийн бодит бодол
      </Text>
      <ImageBackground
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={styles.image}
      >
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>Медиа</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  publisher: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  name: {
    fontWeight: "bold",
  },
  date: {
    fontWeight: "bold",
  },
  title: {
    width: "100%",
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 250,
    overflow: "hidden",
    borderRadius: 15,
    position: "relative",
  },
  categoryContainer: {
    width: 85,
    height: 25,
    position: "absolute",
    bottom: 15,
    left: 15,
    borderRadius: 5,
    backgroundColor: "#3BBCF8",
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    color: "white",
  },
});

export default Headline;