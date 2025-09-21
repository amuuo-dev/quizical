import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AnswerOption from "./AnswerOption";

const QuestionCard = () => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>What is React Native ?</Text>

      <View style={{ gap: 10 }}>
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 40,
    // Shaddow for ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    //shaddow for android below
    elevation: 5,
    gap: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 30,
  },
});

export default QuestionCard;
