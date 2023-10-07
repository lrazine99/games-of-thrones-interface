import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificBookComponent } from './specific-book.component';

describe('SpecificBookComponent', () => {
  let component: SpecificBookComponent;
  let fixture: ComponentFixture<SpecificBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificBookComponent]
    });
    fixture = TestBed.createComponent(SpecificBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
