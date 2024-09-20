// SPDX-License-Identifier: MIT
/**
 * Pragma menjelaksan Bahawsannya kita harus menggunakan versi Solidity yang lebih besar atau sama dengan 0.8.27
 * Pragma Harus Didefiniskan diawal kontrak file
 * @author @dhaniansyahr
 */
pragma solidity >=0.4.21 <0.9.0;

/**
 * Kontrak TodoList
 * Kontrak ini digunakan untuk membuat todo list
 */
contract TodoList {
    /**
     * TaskCount
     * TaskCount digunakan untuk menghitung jumlah task yang ada
     * TaskCount akan bertambah setiap kali task dibuat
     * TaskCount akan digunakan sebagai id task
     * TaskCount Diinisialisasi dengan Public keyword
     */
    uint public taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    /**
     * Function untuk melakukan Mapping Task
     * Yang dimana akan merepresentasikan sebuah list task yang dimana masing masing task id ke dalam sebuah struct Task
     */
    mapping(uint => Task) public tasks;

    event TaskCreated(uint id, string content, bool completed);

    event TaskCompleted(uint id, bool completed);

    constructor() public {
        createTask("Successfully deployed TodoList contract! by @dhaniansyahr");
    }

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        emit TaskCreated(taskCount, _content, false);
    }

    function toggleCompleted(uint _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
        emit TaskCompleted(_id, _task.completed);
    }
}
