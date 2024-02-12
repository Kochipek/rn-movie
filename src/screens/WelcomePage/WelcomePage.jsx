import {StyleSheet} from 'react-native'
import React from 'react'
import OnboardingComponent from '../../components/OnboardingComponent/OnboardingComponent'

const WelcomePage = ({navigation}) => {
  return (
   <OnboardingComponent navigation={navigation}/>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1EFCA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressable: {
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  welcomeContainer: {
    width: 500,
    height: 400,
    borderRadius: 90,
    overflow: 'hidden'
  }
})