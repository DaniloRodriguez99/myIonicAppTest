import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { logWarnings } from 'protractor/built/driverProviders';

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
  
  @Input()
  styleType: string = STYLE_TYPE.default

  @Input()
  circular: boolean = false;

  @Input()
  size: string = BUTTON_SIZES.medium;

  @Output() onClick = new EventEmitter()

  buttonOnClick = () => {
    this.onClick.emit()
  }
}

const TEXT_DEFAULT = "Default text"
const TYPE_DEFAULT = "button"

const STYLE_TYPE = {
  default: "default",
  info: "info",
  warning: "warning",
  sucess: "success"
}

const BUTTON_SIZES = {
  small: "small",
  medium: "medium",
  large: "large"
}

