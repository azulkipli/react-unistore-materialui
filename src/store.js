import createStore from "unistore";
import devtools from "unistore/devtools";
import axios from "axios";
import persistStore from "unissist";
import localStorageAdapter from "unissist/integrations/localStorageAdapter";

const initialState = {
  email: "",
  password: "",
  confirm_password: "",
  full_name: "",
  user_name: "",
  mobile_phone: "",
  login: false,
  tileData: [
  {
    img: require("./images/breakfast.jpg"),
    title: "Breakfast",
    author: "author",
    cols: 2,
    key: 1
  },
  {
    img: require("./images/burgers.jpg"),
    title: "burgers2",
    author: "author",
    cols: 1,
    key: 2
  },
  {
    img: require("./images/camera.jpg"),
    title: "burgers3",
    author: "author",
    cols: 1,
    key: 3
  },
  {
    img: require("./images/morning.jpg"),
    title: "burgers",
    author: "author",
    cols: 1,
    key: 4
  },
  {
    img: require("./images/hats.jpg"),
    title: "burgers",
    author: "author",
    cols: 1,
    key: 5
  },
  {
    img: require("./images/honey.jpg"),
    title: "burgers",
    author: "author",
    cols: 1,
    key: 6
  },
  {
    img: require("./images/vegetables.jpg"),
    title: "Breakfast",
    author: "author",
    cols: 2,
    key: 7
  },
  {
    img: require("./images/burgers.jpg"),
    title: "burgers",
    author: "author",
    cols: 1,
    key: 8
  },
  {
    img: require("./images/breakfast.jpg"),
    title: "breakfast",
    author: "author",
    cols: 1,
    key: 9
  },
  {
    img: require("./images/morning.jpg"),
    title: "burgers",
    author: "author",
    cols: 1,
    key: 10
  }
]
};

const adapter = localStorageAdapter();

export const store = process.env.NODE_ENV === "production" ? createStore(initialState) : devtools(createStore(initialState));

persistStore(store, adapter);

export const actions = store => ({
  // Actions can just return a state update:
  setField: ({ email, password }, event) => {
    if (event.target.name === "email") return { email: event.target.value };
    if (event.target.name === "password") return { password: event.target.value };
  },

  async doSignup(state) {
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
    console.log("doSignup result", result);
    return { login: true };
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
    console.log("doLogout result", result);
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
