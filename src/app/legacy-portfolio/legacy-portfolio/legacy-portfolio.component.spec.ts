import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyPortfolioComponent } from './legacy-portfolio.component';

describe('LegacyPortfolioComponent', () => {
  let component: LegacyPortfolioComponent;
  let fixture: ComponentFixture<LegacyPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegacyPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegacyPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
