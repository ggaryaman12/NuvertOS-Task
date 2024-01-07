import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompoundComponent } from './add-compound.component';

describe('AddCompoundComponent', () => {
  let component: AddCompoundComponent;
  let fixture: ComponentFixture<AddCompoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
