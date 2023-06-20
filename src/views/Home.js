import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Hero />
			<Menu />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
