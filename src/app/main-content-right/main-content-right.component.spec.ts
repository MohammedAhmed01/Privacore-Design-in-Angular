import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentRightComponent } from './main-content-right.component';

describe('MainContentRightComponent', () => {
  let component: MainContentRightComponent;
  let fixture: ComponentFixture<MainContentRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
