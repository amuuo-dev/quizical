import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import QuestionCard from "./component/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import questions from "../questions";
import Card from "./component/Card";
import CustomButton from "./component/CustomButton";

const QuizScreen = () => {
  const question = questions[0];
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* body the card */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.timer}>20 sec</Text>
          </View>
        ) : (
          <Card title="Well Done!">
            <Text>Correct Answers: 3/5</Text>
            <Text>Best Scores: 10</Text>
          </Card>
        )}

        {/* footer */}
        <CustomButton
          title="Next"
          icon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
          onPress={() => console.warn("pressed custom button")}
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
