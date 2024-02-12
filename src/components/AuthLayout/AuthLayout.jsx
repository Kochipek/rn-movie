import React from 'react';
import { Text, View, Image } from 'react-native';
import { CustomInput, PressableButton, } from '../../components/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './Styles';

const AuthLayout = ({
  navigation,
  title,
  imageSource,
  buttonText,
  handleButtonPress,
  setUsername, 
  setEmail,
  setPassword,
  username,
  email,
  password,
}) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={imageSource} />
      </View>
      <Text style={styles.textStyle}>{title}</Text>
      {title === 'Register' && (
        <CustomInput
          secureTextEntry={false}
          onChangeText={setUsername}
          value={username}
          cursorColor={'black'}
          placeholder={'Username'}
          name={'user'}
          
        />
      )}

      <CustomInput
        secureTextEntry={false}
        onChangeText={setEmail}
        value={email}
        cursorColor={'black'}
        placeholder={'Email'}
        name={'envelope'}
        

      />
      <CustomInput
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        cursorColor={'black'}
        placeholder={'Password'}
        name={'lock'}
        
      />

      <PressableButton onPress={() => handleButtonPress()} Text={buttonText} />
      {title === 'Login' && ( <View style={styles.dividerContainer}>
        <View style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>
        </View>
        )}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.lineStyle} />
        <View>
          <Text style={{ width: 50, textAlign: 'center', color: 'gray' }}>Or</Text>
        </View>
        <View style={styles.lineStyle} />
      </View>
      <View style={styles.brandIcons}>
        <FontAwesome5 name="google" size={30} color="red" style={styles.socialIcon} />
        <FontAwesome5 name="github" size={30} color="black" style={styles.socialIcon} />
        <FontAwesome5 name="facebook" size={30} color="#1877f2" style={styles.socialIcon} />
      </View>
      <View style={styles.accountLink}>
        <Text style={{color: 'gray'}}>
        {` ${title === 'Register' ? 'Already have an account?' : 'Dont Have an Account?'}`}
          <Text
            style={{ color: 'black', fontWeight: 'bold' }}
            onPress={() => navigation.navigate(title === 'Register' ? 'Login' : 'Register')}
          >{` ${title === 'Register' ? 'Login' : 'Sign Up'}`}</Text>
        </Text>
      </View>
    </View>
  );
};

export default AuthLayout;
