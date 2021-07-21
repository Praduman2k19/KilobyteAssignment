import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsdocumentsComponent } from './clientsdocuments.component';

describe('ClientsdocumentsComponent', () => {
  let component: ClientsdocumentsComponent;
  let fixture: ComponentFixture<ClientsdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsdocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
