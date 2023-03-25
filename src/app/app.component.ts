import { Component } from '@angular/core';
import { Task } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks : Task[] = [];
  newTodo! : string;

  saveTask(){
    if(this.newTodo){
      const todo = new Task();
      todo.title = this.newTodo;
      todo.isCompleted = true;
      this.tasks.push(todo);
      this.newTodo = '';
    }else{
      alert('Enter your new task')
    }
  }
  done(id: number){
    this.tasks[id].isCompleted = !this.tasks[id].isCompleted;  
  }
  remove(id: number){
    this.tasks = this.tasks.filter((v,i) => i !== id); 
  }
}
