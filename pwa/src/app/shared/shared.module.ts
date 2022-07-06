import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncodeURIPipe } from '../pipes/encode-uri.pipe';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  declarations: [
    EncodeURIPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    IonicStorageModule.forRoot()
  ],
  exports: [
    EncodeURIPipe,
    SearchPipe
  ]
})
export class SharedModule { }
