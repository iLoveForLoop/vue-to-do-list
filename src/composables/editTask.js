import { db } from "@/firebase/config";
import { updateDoc, doc } from "firebase/firestore";

export const editTask = async (id, data) => {
  const taskRef = doc(db, "tasks", id);
  await updateDoc(taskRef, {
    name: data,
  });
};
