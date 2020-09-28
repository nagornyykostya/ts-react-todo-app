import React, { useState } from "react";

interface CreateTaskInputProps {
  createTask: (task: string) => void
};

const CreateTaskInput: React.FC<CreateTaskInputProps> = ({ createTask }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleCreate = (): void => {
    createTask(inputValue);
    setInputValue("");
  };

  return (
    <div className="create-task">
      <input
        type="text"
        className="create-task__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn create-task__btn" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};
export default CreateTaskInput;
