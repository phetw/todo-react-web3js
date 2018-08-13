pragma solidity ^0.4.24;

contract Todos {
    struct Todo {
        uint id;
        string todo;
        address author;
        bool isComplete;
    }
    
    uint todosCount;
    mapping(uint => Todo) public todos;
    
    constructor() public {
    }
    
    function create(string todo) public {
        uint id = todosCount++;
        todos[id] = Todo(id, todo , msg.sender, false);
    }
    
    function toggleStatus(uint id) public {
        todos[id].isComplete = !todos[id].isComplete;
    }
}