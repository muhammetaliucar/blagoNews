import axios from 'axios';

const loginAsync = async (email, password) => {
  const res = await axios.post('http://192.168.1.56:3000/auth/login', {
    email: email,
    password: password,
  });

  return res;
};

export default loginAsync;
