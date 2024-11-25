import { db } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

export const deleteTask = async (id) => {
  const taskRef = doc(db, "tasks", id);

  try {
    await deleteDoc(taskRef);
  } catch (err) {
    console.log(err.message);
  }
};
