import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('task') task:Task;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }
  removeTask(task: Task){
    const res = confirm("Are you sure to delete?")
    if(res){
      this.dataService.removeTask(task)
    }
  }

}
