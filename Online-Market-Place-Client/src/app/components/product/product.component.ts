import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductType } from 'src/app/models/product-type';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: Product[];
  public productTypes: ProductType[];

  constructor(private productService: ProductService,
    private productTypeService: ProductTypeService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    this.productTypeService.getProductTypes().subscribe(productsTypes => {
      this.productTypes = productsTypes;
    });
  }

  addProduct(product: Product) {
    this.productService.saveProduct(product).subscribe(savedProduct => {
      this.products.push(savedProduct);
    });
  }
}
