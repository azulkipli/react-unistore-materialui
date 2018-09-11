import createStore from "unistore";
import devtools from "unistore/devtools";
import axios from "axios";

const initialState = {
  count: 0,
  email: "",
  password: "",
  confirm_password: "",
  full_name: "",
  user_name: "",
  mobile_phone: "",
  login: false
};

export const store = process.env.NODE_ENV === "production" ? createStore(initialState) : devtools(createStore(initialState));

export const actions = store => ({
  // Actions can just return a state update:
  increment(state) {
    return { count: state.count + 1 };
  }, // The above example as an Arrow Function:
  increment2: ({ count }) => ({ count: count + 1 }), //Actions receive current state as first parameter and any other params next
  //check this function as <button onClick={incrementAndLog}>

  incrementAndLog: ({ count }, event) => {
    console.info(event);
    return { count: count + 1 };
  },
  setField: ({ email, password }, event) => {
    if (event.target.name === "email") return { email: event.target.value };
    if (event.target.name === "password") return { password: event.target.value };
  },

  async doLogout(state) {
    let result = await axios
      .get("http://localhost:3232")
      .then(function(response) {
        // handle success
        console.log(response.data);
        return true;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    console.log("doLogin result", result);
    return { login: false };
  },

  async doLogin(state) {
    let result = await axios
      .get("http://localhost:3232")
      .then(function(response) {
        // handle success
        console.log(response.data);
        return true;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    console.log("doLogin result", result);
    return { login: true };
  }
});
