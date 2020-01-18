import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {BidService} from '../../services/bid.service';

@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  productId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private bidService: BidService
  ) {
  }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.productService.getProductById(this.productId).subscribe(product => {
      this.product = product;
    });

    // connect to the product bidding
    this.bidService.joinLiveBid(this.productId);
  }

  bid(value){
    console.log(value)
  }

}
