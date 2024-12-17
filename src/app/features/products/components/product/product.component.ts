import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],

  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  products: Product[] = [];

  constructor(private dataService: ProductService) {}


  ngOnInit() {
    console.log('this.products');
    this.dataService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
      console.log(this.products);
    });
  }

}
