import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(public tasksService: TasksService) {}

  toggleCompleted(task: Task) {
    this.tasksService.toggleCompleted(task);
  }

  remove(id: number) {
    this.tasksService.remove(id);
  }
}
