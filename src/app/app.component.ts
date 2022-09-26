import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TodoComponent } from './components/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day32forms';
  @ViewChild('todoref') // or can put classname if only 1 instance
  todoComp!: TodoComponent;
  // cannot be accessed by ngOnInit
  // accessed with ngAfterViewInit

  @ViewChild('todoref')
  todoElemRef!: ElementRef;
  // for retrieving html of child

  @ViewChildren(TodoComponent)
  todoComps!: QueryList<TodoComponent>;
  // not commonly used

  //ViewChild only checks 1 layer down

  saveTodo() {
    const todo = this.todoComp.getValues();
    console.info(todo);
  }
}
