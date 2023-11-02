import axios from "axios";
import jwt_decode from "jwt-decode";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

// Make API request

/** To get username from Token */
export async function getUsername() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject("Cannot find Token");
  let decode = jwt_decode(token);
  return decode;
}

//  authenticate function
export async function authenticate(username) {
  try {
    console.log(username);
    return await axios.post("http://localhost:8080/api/authenticate", {
      username,
    });
  } catch (error) {
    return { error: "Username doesn't exist...!" };
  }
}

// get User details
export async function getUser({ username }) {
  try {
    const { data } = await axios.get(
      `http://localhost:8080/api/user/${username}`
    );
    return { data };
  } catch (error) {
    return { error: "Passoword doesnt match" };
  }
}

// register user function
export async function registerUser(creds) {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post(`http://localhost:8080/api/register`, creds);

    let { username, email } = creds;

    // send mail
    if (status === 201) {
      await axios.post("http://localhost:8080/api/registerMail", {
        username,
        userEmail: email,
        text: msg,
      });
    }

    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}

// login function
export async function verifyPassword({ username, password }) {
  try {
    if (username) {
      const { data } = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
      });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesnt match" });
  }
}

// Update user function
export async function updateUser(response) {
  try {
    const token = await localStorage.getItem("token");
    const data = await axios.put(
      "http://localhost:8080/api/updateuser",
      response,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldnt Update Profile" });
  }
}

// generate OTP
export async function generateOTP(username) {
  try {
    const {
      data: { code },
      status,
    } = await axios.get("http://localhost:8080/api/generateOTP", {
      params: { username },
    });

    if (status === 201) {
      let {
        data: { email },
      } = await getUser({ username });

      let text = `Your Password Recovery OTP is ${code}.Verify and recover your password`;

      await axios.post("http://localhost:8080/api/registerMail", {
        username,
        userEmail: email,
        text,
        subject: "Password Recovery Request",
      });
    }

    return Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error });
  }
}

// verify OTP
export async function verifyOTP({ username, code }) {
  try {
    const { data, status } = await axios.get(
      "http://localhost:8080/api/verifyOTP",
      {
        params: { username, code },
      }
    );

    return { data, status };
  } catch (error) {
    return Promise.reject(error);
  }
}

// reset password
export async function resetPassword({ username, password }) {
  try {
    const { data, status } = await axios.put(
      "http://localhost:8080/api/resetPassword",
      {
        username,
        password,
      }
    );

    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
}
