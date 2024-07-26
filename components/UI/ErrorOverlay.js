import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constans/styles";

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error Occured!</Text>
      <Text style={[styles.text, styles.message]}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: GlobalStyles.colors.baseText,
    textAlign: 'center',
    marginBottom: 8
  },
  title: {
    fontSize: 20
  },
  message: {
    fontSize: 14
  },
});
