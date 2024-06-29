import { useState } from "react";
import { Button } from "../ui/button";

const UpdateTodoModal = ({ todo, onClose, onSave }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [priority, setPriority] = useState(todo.priority);

  const handleSave = () => {
    onSave({
      ...todo,
      title,
      description,
      priority,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-5 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Update Todo</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-2 p-2 border"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-2 p-2 border"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full mb-4 p-2 border"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <div className="flex justify-end space-x-2">
          <Button onClick={onClose} className="bg-gray-500">
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-blue-500">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodoModal;
