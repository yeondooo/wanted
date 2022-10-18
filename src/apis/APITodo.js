import { APIBase } from './APIBase';

const APITodo = {
  getTodos() {
    const endpoint = '/todos';
    return APIBase.get(endpoint);
  },
  createTodo(data) {
    const endpoint = '/todos';
    return APIBase.post(endpoint, data);
  },
  updateTodo(id, data) {
    const endpoint = `todos/${id}}`;
    return APIBase.put(endpoint, data);
  },
  deleteTodo(id) {
    const endpoint = `todos/${id}}`;
    return APIBase.delete(endpoint);
  },
};

export default APITodo;
