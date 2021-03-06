import { Component } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	todos: Todo[];

	constructor(private todoService: TodoService){

		console.log("home.page.ts constructor");

		console.log(this.todos);

	}

	ngOnInit(){
		this.todoService.getTodos().subscribe(res => {
			this.todos = res;
		});

		console.log("this.todos", this.todos);
	}

	remove(item){
		this.todoService.removeTodo(item.id);

		
	}

}
