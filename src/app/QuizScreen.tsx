import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import QuestionCard from "./component/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Card from "./component/Card";
import CustomButton from "./component/CustomButton";
import { useQuizContext } from "./providers/QuizProvider";
import { useEffect, useState } from "react";

const QuizScreen = () => {
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } =
    useQuizContext();

  const [time, setTime] = useState(20);

  useEffect(() => {
    setTime(20);
    const interval = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [question]);

  useEffect(() => {
    if (time <= 0) {
      onNext();
    }
  }, [time]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* header */}
        <View>
          <Text style={styles.title}>
            Question {questionIndex + 1}/{totalQuestions}
          </Text>
        </View>

        {/* body the card */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.timer}>{time} sec</Text>
          </View>
        ) : (
          <Card title="Well Done!">
            <Text>
              Correct Answers: {score}/{totalQuestions}
            </Text>
            <Text>Best Scores: {bestScore}</Text>
          </Card>
        )}

        {/* footer */}
        <CustomButton
          title="Next"
          icon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
          onPress={onNext}
          onLongPress={() => console.warn("long pressed the custom button")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FDFEF4",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  timer: {
    marginVertical: 15,
    textAlign: "center",
    color: "#005055",
    fontWeight: "bold",
  },
});

export default QuizScreen;
