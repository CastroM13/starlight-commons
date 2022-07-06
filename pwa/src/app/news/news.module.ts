import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsComponent } from './news.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, SharedModule],
  declarations: [NewsComponent],
  exports: [NewsComponent]
})
export class NewsComponentModule {}
