import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { DataService } from 'src/app/services/data.service';
import { Data } from '@angular/router';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[];
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.tasks = this.dataService.getTask()
  }

  addTask(task: Task){
    this.dataService.addTask(task)
  }

}
