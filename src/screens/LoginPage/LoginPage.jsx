import {useState} from 'react';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import { useSelector, useDispatch } from 'react-redux';

import {login} from '../../redux/userSlice';
 
const LoginPage = ({ navigation }) => {
  // state provides entire redux state
  // user is the reducer name
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({email,password}))
  };

  return (
    <AuthLayout
      navigation={navigation}
      title={'Login'}
      imageSource={require('../../../assets/icons/Mobile-login.jpg')}
      buttonText={'Login'}
      handleButtonPress={handleLogin}
      email={email}
      setEmail={(email)=>{setEmail(email)}}
      setPassword={(password)=>{setPassword(password)}}
      password={password}
    />
  );
};

export default LoginPage;
