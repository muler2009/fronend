import axios from "axios";
import { BASE_URL } from "../../components/common/apiTags";
import { toast } from "react-toastify";

const userLogin = async (userData) => {
  // const res = await axios.post(`${BASE_URL}/login`, userData);
  const res = await axios
    .post(`${BASE_URL}/login`, userData)
    .then((response) => {
      return response?.data;
    })
    .then((error) => {
      toast.error(error?.response?.data?.data?.error);
      return error;
    })
    .catch((error) => {
      toast.error(error?.response?.data?.data?.error);
      return error;
    });

  const config = {
    headers: {
      ["authorization"]: `Bearer ${res?.data?.token}`,
    },
  };

  const res2 = await axios.get(`${BASE_URL}/me`, config);
  return { ...res?.data, ...res2?.data };
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
