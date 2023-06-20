import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Hero = () => {
	return (
		<View style={styles.heroImage}>
			<Image
				source={require("./img/laptop2.jpg")}
				style={styles.heroImage}
				reSizeMode="cover"
			/>
		</View>
	);
};

export default Hero;

const styles = StyleSheet.create({
	heroImage: {
		height: "100%",
		width: "100%",
		flex: 6,
	},
});
