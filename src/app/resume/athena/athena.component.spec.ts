import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthenaComponent } from './athena.component';

describe('AthenaComponent', () => {
  let component: AthenaComponent;
  let fixture: ComponentFixture<AthenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthenaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AthenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
