import TaskManager from "./TaskManager";

let taskManager;

describe("TaskManager", () => {
  beforeAll(() => {
    taskManager = new TaskManager();
  });

  test("should be defined in global scope", () => {
    expect(typeof TaskManager).not.toEqual("undefined");
  });

  test("should be a constructor", () => {});
});

describe("methods", () => {
  beforeEach(() => {
    taskManager = new TaskManager();
  });

  test("should be a function", () => {
    expect(taskManager.getList).toBeInstanceOf(Function);
  });

  describe("getList", () => {
    test("should return an array", () => {
      const list = taskManager.getList();
      expect(list).toBeInstanceOf(Array);
    });
    test("the new instance of TaskManager should have an empty queue", () => {
      const list = taskManager.getList();
      expect(list.length).toEqual(0);
    });
  });

  describe("addTask", () => {
    test("should add one task to new instance of TaskManager", () => {
      const task = "first task";
      const list = taskManager.getList();
      taskManager.addTask(task, undefined, undefined);
      expect(list.length).toEqual(1);
      expect(list[0].name).toEqual(task);
    });
  });
});
