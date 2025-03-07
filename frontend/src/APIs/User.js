import axios from "axios";
const url = "http://localhost:8080";

export const signUp = async (data) => {
  try {
    let res = await axios.post(`${url}/signUp`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (data) => {
  try {
    let res = await axios.post(`${url}/logIn`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    let res = await axios.get(`${url}/getAllUsers`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (data) => {
  try {
    const res = await axios.patch(`${url}/updateUser`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (error) {
    console.error('Error in updateUser API call:', error.response?.data || error.message);
    throw error;
  }
};

export const getConnections = async (userId) => {
  try {
    let res = await axios.get(`${url}/getConnections/${userId}`, userId);
    return res;
  } catch (error) {
    console.error("Error fetching connections:", error);
  }
};

export const acceptConnectionRequest = async (data) => {
  try {
    const response = await axios.post(`${url}/acceptConnectionRequest`, data);
    return response.data;
  } catch (error) {
    console.error("Error accepting connection:", error);
    throw error;
  }
};

export const sendConnectionRequest = async (data) => {
  try {
    const response = await axios.post(`${url}/sendConnectionRequest`, data);
    return response.data;
  } catch (error) {
    console.error("Error sending connection request:", error);
    throw error;
  }
};

export const removeConnectionRequest = async (data) => {
  try {
    const response = await axios.post(`${url}/removeConnectionRequest`, data);
    return response.data;
  } catch (error) {
    console.error("Error sending connection request:", error);
    throw error;
  }
};

export const getPendingRequests = async (userId) => {
  try {
    const response = await axios.get(
      `${url}/pendingRequests/${userId}`,
      userId
    );
    // console.log("hey");
    return response.data;
  } catch (error) {
    console.error("Error sending connection request:", error);
    throw error;
  }
};
