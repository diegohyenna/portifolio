import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2HelloComponent } from './hello.component';

describe('HomeComponent', () => {
  let component: V2HelloComponent;
  let fixture: ComponentFixture<V2HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2HelloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
