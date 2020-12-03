import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-2c36e-default-rtdb.firebaseio.com/',
})

export default instance
