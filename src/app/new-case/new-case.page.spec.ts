import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewCasePage } from './new-case.page';

describe('NewCasePage', () => {
  let component: NewCasePage;
  let fixture: ComponentFixture<NewCasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
