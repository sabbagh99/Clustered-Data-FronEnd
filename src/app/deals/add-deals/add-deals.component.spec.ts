import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealsComponent } from './add-deals.component';

describe('AddDealsComponent', () => {
  let component: AddDealsComponent;
  let fixture: ComponentFixture<AddDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
