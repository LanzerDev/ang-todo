import { Component, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';
import { DataService } from 'src/app/services/data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  title: string;
  description: string;

  @Output() taskAdded = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }
  addTask(){
    this.taskAdded.emit({
      title: this.title,
      description: this.description,
      hide: true,
    });
    this.title = ''
    this.description = ''
  }
  
}
