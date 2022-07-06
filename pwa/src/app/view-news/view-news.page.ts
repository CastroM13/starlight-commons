import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService, News } from '../services/data.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.page.html',
  styleUrls: ['./view-news.page.scss'],
})
export class ViewNewsPage {
  @Input() newsUrl;

  constructor(
    protected _sanitizer: DomSanitizer,
    private modal: ModalController
  ) { }

  ionViewWillEnter() {
    this.newsUrl = this._sanitizer.bypassSecurityTrustResourceUrl(decodeURIComponent(this.newsUrl));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  goBack() {
    this.modal.dismiss()
  }
}
