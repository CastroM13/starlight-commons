import { Component } from '@angular/core';
import { DataService, News } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsList = [];
  topics = [];
  pickedTopics = ['nerdbunker'];
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  updateTopicList(event) {
    this.pickedTopics = event.detail.value;
    this.getNews(this.pickedTopics);
  }

  ionViewWillEnter() {
    this.getNews(['nerdbunker'])
    this.getTopics()
  }

  getNews(list = null): void {
    this.newsList = [];
    (list || this.pickedTopics).map(e => {
      this.data.getNews(e).subscribe(
        e => {
          console.log(e)
          this.newsList.push(...e.rss.channel.item);
        }
      );
    })
  }

  getTopics(): void {
    console.log(this.data.getTopics());
    this.topics = this.data.getTopics()
  }

}
