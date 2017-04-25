import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexBlockComponent } from './regex-block.component';

describe('RegexBlockComponent', () => {
  let component: RegexBlockComponent;
  let fixture: ComponentFixture<RegexBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
