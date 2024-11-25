import { collection, onSnapshot } from "firebase/firestore";
import { ref } from "vue";
import { db } from "@/firebase/config";

export const getTasks = () => {
  let tasks = ref([]);

  const tasksRef = collection(db, "tasks");
  onSnapshot(
    tasksRef,
    (snapshot) => {
      tasks.value = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    },
    (err) => {
      console.log(err.message);
    }
  );

  return { tasks };
};
