const API_URL= "https://689c92d158a27b18087eb497.mockapi.io/api/v4/tasks";

export const Mockapi  = () => {
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
