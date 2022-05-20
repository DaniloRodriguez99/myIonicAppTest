import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dr-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss'],
})
export class TextListComponent implements OnInit {
  
  @Input() list: any = [];

  constructor() {

  }

  ngOnInit() {
  }

  

}
