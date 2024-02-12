import {useState} from 'react';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import { useDispatch } from 'react-redux';
import {register} from '../../redux/userSlice';

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleRegister =() => {
    dispatch(register({email,password}))
    setUsername(username)
  };

  return (
    <AuthLayout
      navigation={navigation}
      title={'Register'}
      imageSource={require('../../../assets/icons/register.png')}
      buttonText={'Register'}
      handleButtonPress={handleRegister}

      username={username}
      setUsername= {(username)=>{setUsername(username)}}
      email={email}
      setEmail={(email)=>{setEmail(email)}}
      setPassword={(password)=>{setPassword(password)}}
      password={password}
    />
  );
};

export default RegisterPage;
