import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


import { Products } from '../../modules/products';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[];
  idProduct: number;

  constructor(
    private Service: ApiService,
    private router: Router,
    private sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
    this.Service.get('product').then((products) => {
      this.products = products;
    }); 
  }

  onSelect(product){
    this.router.navigate(["/product", product._id]);
  }

}
