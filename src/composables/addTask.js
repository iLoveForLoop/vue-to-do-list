import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";

export const addTask = async (data) => {
  try {
    const tasksRef = collection(db, "tasks");
    await addDoc(tasksRef, data);
  } catch (error) {
    console.log(error.message);
  }
};
