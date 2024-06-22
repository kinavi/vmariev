import React from 'react';
import { CreateTask } from '../component/CreateTask';
import { Clock } from '../component/Clock';
import { Task } from '../component/Task';
import { observer } from 'mobx-react-lite';
import { useTimeManagerStore } from '../mobx';
import { Loader } from '../../../ui/components/Loader';

const App = observer(() => {
  const {
    controllers: {
      task: {
        status: { isLoading, isReady },
        taskList,
        onCreateTask,
        onRemoveTask,
        onEditTask,
      },
    },
  } = useTimeManagerStore();

  return (
    <div className="app__container">
      <Clock />
      {isLoading && <Loader />}
      {isReady && (
        <div className="app__body">
          <div className="app__tasks-group">
            {taskList.map((task) => (
              <Task
                task={task}
                mix="app__task"
                key={task.id}
                onEditTask={() => {
                  console.log('onChange');
                }}
                onSave={(updatedTask) => {
                  onEditTask(
                    updatedTask.id,
                    updatedTask.name,
                    updatedTask.description
                  );
                }}
                onRemove={() => {
                  onRemoveTask(task.id);
                }}
                isReadonly={task.isReadonlyMode}
                onClick={() => {
                  console.log('onClick');
                }}
              />
            ))}
          </div>
          <CreateTask onCreate={onCreateTask} />
        </div>
      )}
    </div>
  );
});

export default App;
