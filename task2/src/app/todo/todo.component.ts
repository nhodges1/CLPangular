import { Component } from '@angular/core';

export class Todo{
  name: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string;

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('Please Enter Item');
    }
  }

  removeTodo(id:number){
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
