import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentLeftComponent } from './main-content-left.component';

describe('MainContentLeftComponent', () => {
  let component: MainContentLeftComponent;
  let fixture: ComponentFixture<MainContentLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
