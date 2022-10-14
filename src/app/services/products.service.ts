import { Injectable } from '@angular/core';

import { Products } from '../modules/products'
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private product;

  constructor(private api: ApiService) {   }

  async getProduct(id: number | string) {
    let product;
    await this.api.get('product').then((products: Products[]) => {
      product = products.find(the_product => the_product._id === + id);
      this.product = product;
    });
    return this.product;
  }
}
