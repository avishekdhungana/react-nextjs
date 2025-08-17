const API_URL= "https://689edd803fed484cf8783d09.mockapi.io/api12/users"


export const fetchTasks  = () => {
  return fetch(API_URL).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return res.json();
  });
};

export const addTask = (title) => {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, status: "New" }),
  }).then((res) => res.json());
};


export const updateTask = (id, status) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  }).then((res) => res.json());
};