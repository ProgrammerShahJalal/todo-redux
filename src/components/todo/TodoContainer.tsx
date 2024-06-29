import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  const sortTodos = (todos) => {
    return [...todos].sort(
      (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Ensure todos are sorted
  const sortedTodos = sortTodos(todos?.data || []);

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {sortedTodos.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
