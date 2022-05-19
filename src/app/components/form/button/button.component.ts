import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dr-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {


  constructor() { }

  ngOnInit() {}

  @Input()
  text: string = TEXT_DEFAULT

  @Input()
  href: string = ""

  @Input()
  type: string = TYPE_DEFAULT

  @Output() onClick = new EventEmitter()

  buttonOnClick = () => {
    this.onClick.emit()
  }
}

const TEXT_DEFAULT = "Default text"
const TYPE_DEFAULT = "button"

