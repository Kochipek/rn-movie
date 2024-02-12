import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingComponent = ({navigation}) => {
  const pages = [
    {
      backgroundColor: '#f6b974',
      image: <Image style={styles.onboardingImage} source={require('../../../assets/onboarding1.png')} />,
      title: 'Welcome to the App',
      subtitle: 'Explore the awesome features of our app.',
    },
    {
      backgroundColor: '#a9def9',
      image: <Image style={styles.onboardingImage} source={require('../../../assets/onboarding2.png')} />,

      title: 'This is the second page',
      subtitle: 'lorem ipsum dolor sit amet',
    },
    {
      backgroundColor: '#c1fba4',
      image: <Image style={styles.onboardingImage} source={require('../../../assets/onboarding3.png')} />,
      title: 'This is the third page',
      subtitle: 'lorem ipsum dolor sit amet'
    },
  ];

  return (
    <Onboarding
      pages={pages}
      bottomBarColor= "rgba(0,0,0,0)"
      showSkip={true} // Set to true if you want to show the Skip button
      showPagination
      bottomBarHighlight={false}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
    />
  );
};

const styles = StyleSheet.create({
  onboardingImage : {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 50,
  }
});

export default OnboardingComponent;
