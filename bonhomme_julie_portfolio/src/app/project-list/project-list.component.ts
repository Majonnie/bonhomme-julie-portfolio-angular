import { Component, OnInit } from '@angular/core';

import { projects } from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects = projects.reverse(); //Les projets seront ainsi affichés du plus récent au plus ancien.

  constructor() {}

  ngOnInit(): void {
  }

}
