import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { RouterTestingModule } from '@angular/router/testing';


let router: Router;
let location: Location;

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
        {path: 'shopping_cart', component: NavbarComponent}
      ])],
      declarations: [ NavbarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    location = TestBed.get(Location);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the route for the shopping cart', <any>fakeAsync(() => {
      component.changeRoute();
      tick();
      expect(location.path()).toBe('/shopping_cart');
  }));
});
