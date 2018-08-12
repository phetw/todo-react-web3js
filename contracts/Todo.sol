pragma solidity ^0.4.24;

contract Todos {
    struct Todo {
        uint id;
        string todo;
        address author;
        bool isComplete;
    }
    
    uint todosCount;
    Todo[] todoList;
    
    constructor() public {
    }
    
    function create(string todoText) public {
        uint id = todosCount++;
        todoList.push(Todo(id, todoText, msg.sender, false));
    }
    
    function get(uint id) public view returns (uint _id, string _todoText, address _author, bool _isComplete){
        return (todoList[id].id, todoList[id].todo, todoList[id].author,todoList[id].isComplete);
    }
    
    function toggleStatus(uint id) public {
        todoList[id].isComplete = !todoList[id].isComplete;
    }
    
}