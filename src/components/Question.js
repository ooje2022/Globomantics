import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableHighlight,
} from "react-native";
import React, { useState } from "react";

const Question = (props) => {
	const [selected, setSelected] = useState(false);
	const [correct, setCorrect] = useState(false);

	const chooseAnswer = (ans) => {
		let worth = props.worth;
		if (ans === props.correctAnswer) {
			setSelected(true);
			setCorrect(true);
			props.scoreUpdate(0);
		} else {
			setSelected(true);
			props.scoreUpdate(worth);
		}
	};

	return (
		<View style={styles.container}>
			{!selected && (
				<View style={styles.container}>
					<Text styles={styles.questionText}>{props.question}</Text>
					<TouchableHighlight
						underlayColor="#d3d3d3"
						onPress={() => chooseAnswer("answer1")}
					>
						<Text styles={styles.answerText}>{props.answer1}</Text>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor="#d3d3d3"
						onPress={() => chooseAnswer("answer2")}
					>
						<Text styles={styles.answerText}>{props.answer2}</Text>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor="#d3d3d3"
						onPress={() => chooseAnswer("answer3")}
					>
						<Text styles={styles.answerText}>{props.answer3}</Text>
					</TouchableHighlight>

					<TouchableHighlight
						underlayColor="#d3d3d3"
						onPress={() => chooseAnswer("answer4")}
					>
						<Text styles={styles.answerText}>{props.answer4}</Text>
					</TouchableHighlight>
				</View>
			)}

			{selected && correct && (
				<View style={styles.correctContainer}>
					<Text styles={styles.questionText}>{props.question}</Text>
					<Text styles={styles.answerText}>{props.answer1}</Text>
					<Text styles={styles.answerText}>{props.answer2}</Text>
					<Text styles={styles.answerText}>{props.answer3}</Text>
					<Text styles={styles.answerText}>{props.answer4}</Text>
					<Text styles={styles.answerText}> CORRECT </Text>
				</View>
			)}
			{selected && !correct && (
				<View style={styles.wrongContainer}>
					<Text styles={styles.questionText}>{props.question}</Text>
					<Text styles={styles.answerText}>{props.answer1}</Text>
					<Text styles={styles.answerText}>{props.answer2}</Text>
					<Text styles={styles.answerText}>{props.answer3}</Text>
					<Text styles={styles.answerText}>{props.answer4}</Text>
					<Text styles={styles.answerText}> INCORRECT </Text>
				</View>
			)}
		</View>
	);
};

export default Question;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	correctContainer: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: "#008000",
	},
	wrongContainer: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: "#ff0000",
	},
	questionText: {
		flex: 2,
		padding: 15,
		fontSize: 20,
	},
	answerText: {
		flex: 2,
		padding: 15,
		fontSize: 20,
		textAlign: "center",
	},
});
