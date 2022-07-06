import { Component, ViewChild } from '@angular/core';
import { DataService, News } from '../services/data.service';
import { Storage } from '@ionic/storage';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('modal') modal;
  filter = '';
  newsList = [];
  topics = [];
  pickedTopics = [];
  constructor(private data: DataService, private storage: StorageService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  updateTopicList(event) {
    console.log(event)
    if (event.detail) {
      this.pickedTopics = [event.detail.value];
    } else {
      this.pickedTopics = [event];
    }
    this.storage.remove('savedNews');
    this.getNews(this.pickedTopics);
    this.storage.set('pickedTopics', this.pickedTopics);
    this.modal.dismiss()
  }

  ionViewWillEnter() {
    this.storage.get('pickedTopics').then((val) => {
      console.log()
      this.getNews(val)
    });
    this.getTopics()
  }

  getNews(list = null): void {
    this.newsList = [];
    this.storage.get('savedNews').then((val) => {
      console.log(val)
      if (val?.length > 0) {
        this.newsList = val;
      } else {
        (list || this.pickedTopics).map(e => {
          this.data.getNews(e).subscribe(
            e => {
              console.log(e)
              if (e.rss?.channel) {
                this.newsList.push(...e.rss.channel.item);
                this.storage.set('savedNews', e.rss.channel.item);
              }
              if (e.feed?.entry) {
                this.newsList.push(...e.feed.entry);
                this.storage.set('savedNews', e.feed.entry);
              }
            }
          );
        })
      }
    });
    
  }

  getTopics(): void {
    this.topics = this.data.getTopics()
    console.log(this.topics)
  }

}
