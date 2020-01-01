import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectOptionPage } from './select-option.page';

describe('SelectOptionPage', () => {
  let component: SelectOptionPage;
  let fixture: ComponentFixture<SelectOptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
