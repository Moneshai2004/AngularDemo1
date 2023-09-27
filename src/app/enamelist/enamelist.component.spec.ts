import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnamelistComponent } from './enamelist.component';

describe('EnamelistComponent', () => {
  let component: EnamelistComponent;
  let fixture: ComponentFixture<EnamelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnamelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
