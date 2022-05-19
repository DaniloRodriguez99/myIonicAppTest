import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  text = "signIn"

  constructor() { }

  ngOnInit() {
  }

  example = () => {
    this.text = "i am clicked"
  }
}
