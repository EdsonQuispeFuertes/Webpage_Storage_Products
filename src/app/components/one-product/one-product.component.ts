import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { Products } from '../../modules/products';


@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {
  product: Products;
  price: number;
  quantity: number = 1;
  productId: number;
  id_products: Number[] = [];
  product_to_buy = {"state" : "",
                    "id_product" : 0,
                    "name" : "",
                    "quantity" : 0,
                    "price" : 0};
  showModal = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.service.getProduct(params.get('_id')).then((product)=>{
        this.product = product;
        this.price = Number(this.product._price);
      });
      this.productId = Number(params.get('_id'));
    }
    );
  }

  ngAfterViewInit() {
    this.showModal = true;
    this.cdr.detectChanges();
  }

  onClose() {
    this.showModal = false;
    setTimeout(
      () => this.router.navigate(['/product']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }
}
