import createStore from "unistore";
import devtools from "unistore/devtools";
import axios from "axios";
import persistStore from "unissist";
import localStorageAdapter from "unissist/integrations/localStorageAdapter";
// import createHistory from "history/createBrowserHistory";
// const history = createHistory();

// Get the current location.
// const location = history.location;

const initialState = {
  email: "",
  password: "",
  confirm_password: "",
  full_name: "",
  user_name: "",
  mobile_phone: "",
  login: false
};

const adapter = localStorageAdapter();

export const store =
  process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

persistStore(store, adapter);

const env = process.env

export const actions = store => ({
  // Actions can just return a state update:
  setField: ({ email, password }, event) => {
    if (event.target.name === "email") return { email: event.target.value };
    if (event.target.name === "password") return { password: event.target.value };
  },

  async doSignup(state) {
    let result = await axios
      .get(env.REACT_APP_API_LOGIN)
      .then(function(response) {
        // handle success
        console.log(response.data);
        return true;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    console.log("doSignup result", result);
    return { login: true };
  },

  async doLogout(state) {
    let result = await axios
      .get(env.REACT_APP_API_LOGIN)
      .then(function(response) {
        // handle success
        console.log("doLogout res", response.data);
        return true;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    console.log("doLogout result", result);
    if (result) {
      // history.push("/");
      return { login: false };
    }
  },

  async doLogin(state) {
    let result = await axios
      .get(env.REACT_APP_API_LOGIN)
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
    return { login: result };
  }
});
