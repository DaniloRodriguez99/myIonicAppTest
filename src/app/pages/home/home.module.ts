import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

//my imports
import { FormModule } from '../../components/form/form.module'
import { ListsModule } from "../../components/lists/lists.module"
import { HomePageRoutingModule } from './home-routing.module';

//my services
import { NewsService } from "../../services/news.service"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FormModule,
    ListsModule
  ],
  declarations: [HomePage],
  providers: [NewsService]
})
export class HomePageModule {}
