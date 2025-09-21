import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import QuestionCard from "./component/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const QuizScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* body the card */}
        <View>
          <QuestionCard />
          <Text style={styles.timer}>20 sec</Text>
        </View>

        {/* footer */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn("pressed")}
          onLongPress={() => console.warn("long pressed")}
        >
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome6
            name="arrow-right-long"
            size={16}
            color="white"
            style={styles.buttonIcon}
          />
        </Pressable>
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
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right: 20,
  },
});

export default QuizScreen;
