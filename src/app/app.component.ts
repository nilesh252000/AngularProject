import { Component, OnInit } from '@angular/core';
import { Project } from './project';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Fields for handling projects
  projects: Project[] = [];
  newProject: Project = new Project(); // Initialize newProject with default values
  projectID:any;

  constructor() {}

  ngOnInit(): void {
    this.projectID=0;
  }
  

  onSaveClick(): void {
    // Simulate posting data by pushing the new project to the array
    this.projects.push(this.newProject);
    console.log('Project saved:', this.newProject);

    // Optionally, reset newProject for the next input
    this.newProject = new Project();
  }
}