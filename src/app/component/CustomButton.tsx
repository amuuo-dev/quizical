import {
  Pressable,
  Text,
  StyleSheet,
  View,
  PressableProps,
} from "react-native";

type ButtonProps = {
  title: string;
  icon?: React.ReactNode;
} & PressableProps;

const CustomButton = ({ title, icon, ...pressableProps }: ButtonProps) => {
  return (
    <Pressable {...pressableProps} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.buttonIcon}>{icon}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default CustomButton;
