import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./pictures/background-pictures-one.jpg')} style={styles.firstBackgroundImage} />
      <Image source={require('./pictures/background-pictures-two.jpg')} style={styles.secondBackgroundImage} />
      <Image source={require('./pictures/third-background-pictures.jpg')} style={styles.thirdBackgroundImage} />
      <Text style={styles.title}>Ready to find your perfect stay?</Text>
      <Text style={styles.subtitle}>Get the opportunity to find the best deals for your next stay.</Text>
      <Image source={require('./pictures/first-icon.png')} style={styles.firsticon} />
      <Image source={require('./pictures/second-icon.png')} style={styles.secondicon} />
      <Image source={require('./pictures/third-icon.png')} style={styles.thirdicon} />
      <TouchableOpacity href="./screens/Home" asChild style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 500,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    position: 'absolute',
    bottom: 270,
  },
  firsticon: {
    position: 'absolute',
    bottom: 160,
    left: 150,
  },
  secondicon: {
    position: 'absolute',
    bottom: 160,
    left: 200,
  },
  thirdicon: {
    position: 'absolute',
    bottom: 160,
    right: 180,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'center',
    marginHorizontal: 40,
    position: 'absolute',
    bottom: 180,
    opacity: 0.6,
    marginBottom: 32,
  },
  firstBackgroundImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 20,
    position: 'absolute',
    top: 50,
    left: 62,
    transform: [{ rotate: '40deg' }],
  },
  secondBackgroundImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: 'absolute',
    top: 165,
    right: 65,
    transform: [{ rotate: '40deg' }],
  },
  thirdBackgroundImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: 'absolute',
    top: 180,
    left: 20,
    transform: [{ rotate: '40deg' }],
  },
  button: {
    backgroundColor: '#2C67FF',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: '90%',
    textAlign: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
  },
  buttonText: {
    color: 'white',
    width: '90%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
