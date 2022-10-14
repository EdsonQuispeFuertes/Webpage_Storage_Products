import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

import { ProductsComponent } from './products.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { get_product, test_product } from "./products-mock";


  let router: Router;
  let location: Location;

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {path: 'product', component: ProductsComponent},
          {path: 'product/:_id', component: ProductsComponent}
        ])],
      declarations: [ ProductsComponent ],
      providers: [
        {provide: ApiService, useClass: get_product},
        {
          provide: DomSanitizer,
          useValue: {
            sanitize: (ctx, val) => val,
            bypassSecurityTrustResourceUrl: val => val,
          }
        },
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    location = TestBed.get(Location);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should charge the page of products', <any>fakeAsync(() => {
      component.ngOnInit();
      tick();
      expect(component.products).toBeDefined();
  }));

  it('should change the route for the id of one product', <any>fakeAsync(() => {
    const mock_product  = test_product;
      component.onSelect(mock_product);
      tick();
      expect(location.path()).toBe('/product/1');
  }));

  it('should return the base 64 in image', () => {
    const image = "/9j/4AAQSkZJRgABAQAAA...";
    expect(component.transformImage(image)).toEqual("data:image/png;base64,/9j/4AAQSkZJRgABAQAAA...");
  });
});
