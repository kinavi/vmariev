import { makeAutoObservable, runInAction } from 'mobx';
import { Task } from '../models/Task';
import { ApiService } from '../../../../api/ApiService';
import { Status } from '../../../../mobx/helpers/Status';

export class TaskController {
  status: Status;

  taskList: Task[] = [];

  constructor(public api: ApiService) {
    this.status = new Status();
    makeAutoObservable(this);
  }

  onInitial = async () => {
    this.status.updateStatus('loading');
    const result = await this.api.domains.timeManager.task.getAll();
    runInAction(() => {
      this.taskList = result.map((item) => new Task(item, this.api));
    });
    this.status.updateStatus('ready');
  };

  onCreateTask = async (name: string, description?: string) => {
    this.status.updateStatus('loading');
    const { create } = this.api.domains.timeManager.task;
    const result = await create({
      name,
      description,
    });
    runInAction(() => {
      if (result) {
        const newTask = new Task(result, this.api);
        this.taskList.push(newTask);
      }
    });
    this.status.updateStatus('ready');
  };

  onEditTask = async (taskId: number, name: string, description?: string) => {
    this.status.updateStatus('loading');
    const { edit } = this.api.domains.timeManager.task;
    const result = await edit({
      id: taskId,
      name,
      description,
    });
    runInAction(() => {
      if (result) {
        const updatedTask = new Task(result, this.api);
        this.taskList = this.taskList.map((item) =>
          item.id === taskId ? updatedTask : item
        );
      }
    });
    this.status.updateStatus('ready');
  };

  onRemoveTask = async (taskId: number) => {
    this.status.updateStatus('loading');
    const { remove } = this.api.domains.timeManager.task;
    const isSuccess = await remove(taskId);
    runInAction(() => {
      if (isSuccess) {
        this.taskList = this.taskList.filter((item) => item.id !== taskId);
      }
    });
    this.status.updateStatus('ready');
  };
}
