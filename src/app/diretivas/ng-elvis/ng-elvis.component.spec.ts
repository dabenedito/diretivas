import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgElvisComponent } from './ng-elvis.component';

describe('NgElvisComponent', () => {
  let component: NgElvisComponent;
  let fixture: ComponentFixture<NgElvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgElvisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgElvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
