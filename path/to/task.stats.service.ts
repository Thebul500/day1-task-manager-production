import { Task } from '../models/task.model';

export const getTaskStats = async () => {
  try {
    const completedTasksCount = await Task.count({ where: { status: 'completed' } });
    const pendingTasksCount = await Task.count({ where: { status: 'pending' } });
    return { completedTasksCount, pendingTasksCount };
  } catch (error) {
    throw new Error('Failed to fetch task stats');
  }
};
