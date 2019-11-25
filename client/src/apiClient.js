import axios from "axios";

const ApiClient = {};
ApiClient.install = function(Vue, options) {
  Vue.prototype.$apiClient = {
    createRequest(url, method = "GET", data = {}) {
      const config = {
        withCredentials: true,
        headers: {
          "Content-type": "application/json"
        }
      };
      config.url = `http://localhost:4440${url}`;
      if (method === "POST" || method === "PUT") {
        data = JSON.stringify(data);
        config.data = data;
      }
      config.method = method;
      console.log(config);
      return axios.request(config);
    },
    login(login, password) {
      return this.createRequest("/api/signin", "POST", {
        login: login,
        password: password
      });
    },
    logout(userId) {
      return this.createRequest(`/api/logout/${userId}`, "DELETE");
    }
  };
};

export default ApiClient;
