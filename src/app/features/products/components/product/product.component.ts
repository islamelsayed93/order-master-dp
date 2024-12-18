import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  products: Product[] = [];

  constructor(private dataService: ProductService, public http: HttpClient) {}


  ngOnInit() {
    this.dataService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    });



  }

  // editQuantity(product: Product) {
  //   this.dataService.editProductQuantity(product.ProductId, 9).subscribe(() => {
  //     product.AvailablePieces = 9;
  //   });
  // }

}
