import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../../types";
import Card from "./Card";
import { useState } from "react";

type QuestionCardProps = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option, index) => (
          <AnswerOption key={index} option={option} />
        ))}
      </View>
    </Card>
  );
};

export default QuestionCard;
