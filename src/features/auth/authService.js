import axios from "axios";
import { BASE_URL } from "../../components/common/apiTags";

const userLogin = async (userData) => {
  // const res = await axios.post(`${BASE_URL}/login`, userData);
  const res = await axios
    .post(`${BASE_URL}/login`, userData)
    .then((response) => {
      return response?.data;
    })
    .then((error) => {
      // console.log(data);
      return error;
    })
    .catch((error) => {
      return error;
    });

  return res;
};

const checkToken = async (token) => {
  const config = {
    headers: {
      ["authorization"]: `Bearer ${token}`,
    },
  };

  return true;
};

const logout = () => {
  localStorage.removeItem("auth");
};

const authService = {
  userLogin,
  checkToken,
  logout,
};

export default authService;
