import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent implements OnInit {
  title = 'Angular Tutorial';
  user = {
    name: 'desmond',
    profession: 'software developer'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
