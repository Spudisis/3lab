const getAllTasksXML = async () =>
  new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://intership-liga.ru/tasks/`, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onload = () => res(xhr.response);
    xhr.onerror = () => rej(xhr.status);
    xhr.send(null);
  });

const postTaskXML = async (task) =>
  new Promise((res, rej) => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `https://intership-liga.ru/tasks/`, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onload = () => res(xhr.response);
    xhr.onerror = () => rej(xhr.status);
    xhr.send(JSON.stringify(task));
  });

const deleteTaskXML = async (id) => {
  checkId(id);
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `https://intership-liga.ru/tasks/${id}`, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onload = () => res(xhr.response);
    xhr.onerror = () => rej(xhr.status);
    xhr.send(null);
  });
};

const getOneTaskXML = async (id) => {
  checkId(id);
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://intership-liga.ru/tasks/${id}`, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onload = () => res(xhr.response);
    xhr.onerror = () => rej(xhr.status);
    xhr.send(null);
  });
};

const changeTaskXML = async (id, body) =>
  new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", `https://intership-liga.ru/tasks/${id}`, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onload = () => res(xhr.response);
    xhr.onerror = () => rej(xhr.status);
    xhr.send(JSON.stringify(body));
  });

// getAllTasksXML()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// postTaskXML({ name: "XML", info: "test task", isImportant: false, isCompleted: false })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// deleteTaskXML(11)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// getOneTaskXML(1)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// changeTaskXML(9, { name: "xmlHTTPrequest" })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
