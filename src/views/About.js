import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const aboutGlobo = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias molestias mollitia accusantium similique deleniti explicabo dignissimos a. Accusamus, sint.`;

const whatGlobo = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quos.
Minus veniam perferendis accusantium tempora quae culpa, blanditiis placeat totam!`;

const AboutScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<Image
				source={require("../components/img/arch640.jpg")}
				style={styles.pics}
			/>
			<Text style={styles.aboutTitle}>Who We Are</Text>
			<Text style={styles.aboutText}>{aboutGlobo}</Text>
			<Image
				style={styles.pics}
				source={require("../components/img/computer640.jpg")}
			/>
			<Text style={styles.aboutTitle}>What We Do</Text>
			<Text style={styles.aboutText}>{whatGlobo}</Text>
		</ScrollView>
	);
};

export default AboutScreen;

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
	},
	pics: {
		height: 300,
	},
	aboutTitle: {
		paddingTop: 10,
		textAlign: "center",
	},
	aboutText: {
		paddingBottom: 20,
		paddingLeft: 10,
		paddingRight: 10,
	},
});
