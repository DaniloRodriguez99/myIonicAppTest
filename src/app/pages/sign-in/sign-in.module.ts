import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormModule } from '../../components/form/form.module'
import { SignInPage } from './sign-in.page';

//my modules

import { IonicModule } from '@ionic/angular';
import { SignInPageRoutingModule } from './sign-in-routing.module';

//my services

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule,
    FormModule
  ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
