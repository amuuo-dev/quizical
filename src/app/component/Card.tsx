import { View, Text, StyleSheet } from "react-native";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  title: { fontSize: 24, fontWeight: "500", lineHeight: 30 },
});

export default Card;
