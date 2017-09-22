import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaprincipalComponent } from './paginaprincipal.component';

describe('PaginaprincipalComponent', () => {
	let component: PaginaprincipalComponent;
	let fixture: ComponentFixture<PaginaprincipalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaprincipalComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaprincipalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
