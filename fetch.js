const checkId = (id) => {
  if (!id || typeof id !== "number") {
    throw new Error("id is undefined or not a number");
  }
};

const getAllTasks = async () => {
  try {
    const res = await fetch("https://intership-liga.ru/tasks");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const postTask = async (task) => {
  try {
    const res = await fetch("https://intership-liga.ru/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: { "Content-Type": `application/json` },
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (id) => {
  try {
    checkId(id);
    const res = await fetch(`https://intership-liga.ru/tasks/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": `application/json` },
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getOneTask = async (id) => {
  try {
    checkId(id);
    const res = await fetch(`https://intership-liga.ru/tasks/${id}`);
    if (!res.ok) {
      throw new Error("task not found");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const changeTask = async (id, body) => {
  try {
    checkId(id);
    const res = await fetch(`https://intership-liga.ru/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": `application/json` },
    });

    if (!res.ok) {
      throw new Error("error update task");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// getAllTasks();
// postTask({
//   name: "newTask2",
//   info: "somebody once told me. The world is gonna roll me.",
//   isImportant: false,
//   isCompleted: false,
// });
// deleteTask(10);
// getOneTask(1);
// changeTask(11, { name: "shrek" });
