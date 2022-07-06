import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { News } from '../services/data.service';
import { ViewNewsPage } from '../view-news/view-news.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() news: News;

  constructor(private modalController: ModalController) { }
  
  ngOnInit() {}

  async openNews(newsUrl) {
    const modal = await this.modalController.create({
    component: ViewNewsPage,
    componentProps: { newsUrl }
    });
  
    await modal.present();
  
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
