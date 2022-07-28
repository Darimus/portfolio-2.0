import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerNavigationComponent } from './explorer-navigation.component';

describe('ExplorerNavigationComponent', () => {
  let component: ExplorerNavigationComponent;
  let fixture: ComponentFixture<ExplorerNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
