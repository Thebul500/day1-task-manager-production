import { Task } from '../models/task.model';
import { Op } from 'sequelize';

export const createTask = async (taskData: any) => {
  try {
    return await Task.create(taskData);
  } catch (error) {
    throw new Error('Failed to create task');
  }
};

export const getTasks = async (filters: any) => {
  try {
    const { status, priority, assignee, dueDate } = filters;
    const whereClause = {};
    if (status) whereClause.status = status;
    if (priority) whereClause.priority = priority;
    if (assignee) whereClause.assigneeId = assignee.id;
    if (dueDate) whereClause.dueDate = { [Op.lte]: dueDate };
    return await Task.findAll({ where: whereClause });
  } catch (error) {
    throw new Error('Failed to fetch tasks');
  }
};
