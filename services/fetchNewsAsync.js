import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchNewsAsync = async () => {
  const res = await axios.get('http://192.168.1.56:3000/news');

  return res;
};

export default fetchNewsAsync;
