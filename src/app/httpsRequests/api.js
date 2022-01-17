import http from "axios";
import axios from "axios";

class SquareBoatApi {
  static baseHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  static baseUrl() {
    return "";
  }
  static get(route, headers, params, timeout, responseType = null) {
    return this.api("get", route, headers, params, {}, timeout, responseType);
  }

  static put(route, headers, params, data, timeout, responseType = null) {
    return this.api("put", route, headers, params, data, timeout, responseType);
  }

  static post(route, headers, params, data, timeout, responseType = null) {
    return this.api(
      "post",
      route,
      headers,
      params,
      data,
      timeout,
      responseType
    );
  }

  static patch(route, headers, params, data, timeout, responseType = null) {
    return this.api(
      "patch",
      route,
      headers,
      params,
      data,
      timeout,
      responseType
    );
  }

  static delete(route, headers, params, data, timeout, responseType = null) {
    return this.api(
      "delete",
      route,
      headers,
      params,
      data,
      timeout,
      responseType
    );
  }

  static api(requestType, route, headers, params, data, timeout, responseType) {
    const host = SquareBoatApi.baseUrl();
    const url = `${host}${route}`;
    const baseHeaders = SquareBoatApi.baseHeaders();

    const requestConfig = {
      headers: headers ? Object.assign({}, baseHeaders, headers) : baseHeaders,
    };

    if (params) {
      requestConfig.params = params;
    }

    if (responseType) {
      requestConfig.responseType = responseType;
    }

    http.create();
    http.defaults.timeout = timeout;
    axios.interceptors.request.use(
      function (config) {
        const token = window.localStorage.getItem("SquareBoatsToken");

        if (token !== null) {
          config.headers.Authorization = `${token}`;
        }

        return config;
      },
      function (err) {
        return Promise.reject(err);
      }
    );
    axios.interceptors.response.use(
      (next) => {
        return Promise.resolve(next);
      },
      (error) => {
        if (error.response) {
          if (error.response.status === 403) {
            // window.localStorage.removeItem("SquareBoatsToken")
            // window.location.replace("./")
          }
        }
        return Promise.reject(error);
      }
    );

    if (requestType === "get" || requestType === "delete") {
      return http[requestType](url, requestConfig)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    }

    return http[requestType](url, data, requestConfig)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export default SquareBoatApi;
