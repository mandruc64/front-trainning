import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugComponent } from './bug.component';

describe('BugComponent', () => {
  let component: BugComponent;
  let fixture: ComponentFixture<BugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BugComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
