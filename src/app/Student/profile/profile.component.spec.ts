import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponents } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponents;
  let fixture: ComponentFixture<ProfileComponents>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
