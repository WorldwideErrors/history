import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  container: {
    padding: 16,
    paddingBottom: 40,
  },

  title: {
    fontSize: 34,
    fontWeight: "300",
    marginBottom: 12,
  },

  timerRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },

  timerText: {
    fontSize: 26,
    fontWeight: "600",
  },

  question: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },

  answers: {
    gap: 12,
  },

  option: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  optionText: {
    fontSize: 16,
  },

  feedback: {
    marginTop: 16,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
  },

  feedbackText: {
    fontSize: 16,
    fontWeight: "600",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#4F46E5",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: "auto",
    marginVertical: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },


});

export default styles;