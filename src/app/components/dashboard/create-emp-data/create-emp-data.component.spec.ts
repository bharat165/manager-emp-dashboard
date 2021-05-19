import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpDataComponent } from './create-emp-data.component';

describe('CreateEmpDataComponent', () => {
  let component: CreateEmpDataComponent;
  let fixture: ComponentFixture<CreateEmpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
