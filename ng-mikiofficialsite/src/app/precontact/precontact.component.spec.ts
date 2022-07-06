import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecontactComponent } from './precontact.component';

describe('PrecontactComponent', () => {
  let component: PrecontactComponent;
  let fixture: ComponentFixture<PrecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
