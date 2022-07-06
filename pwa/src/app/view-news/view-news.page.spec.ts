import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewNewsPageRoutingModule } from './view-news-routing.module';

import { ViewNewsPage } from './view-news.page';

describe('ViewNewsPage', () => {
  let component: ViewNewsPage;
  let fixture: ComponentFixture<ViewNewsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNewsPage ],
      imports: [IonicModule.forRoot(), ViewNewsPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
