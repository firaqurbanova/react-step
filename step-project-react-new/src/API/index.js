const domain = "http://localhost:3000";

function fetchFabric(endpoint, method) {
  return async (params = {}) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let getParams = "";
    // Delete
    if (method == "DELETE") {
      getParams += `/`;
      for (let key in params) {
        getParams += `${params[key]}`;
      }
      options.method = method;
    } 
    // Update
    else if (method == "PATCH") {
      getParams += `/`;
      for (let key in params) {
        getParams += `${params[key]}`;
      }
      options.method = method;
      options.body = JSON.stringify(params);
    }
    
    else if (method !== "GET") {
      options.method = method;
      options.body = JSON.stringify(params);
    } 
    
    else {
      getParams += `?`;
      for (let key in params) {
        getParams += `${key}=${params[key]}&`;
      }
    }

    const res = await fetch(`${domain}${endpoint}${getParams}`, options);
    return res.json();
  };
}

export const getNotes = fetchFabric("/notes", "GET");
export const deleteNotes = fetchFabric("/notes", "DELETE");
export const updateNote = fetchFabric("/notes", "PATCH");

