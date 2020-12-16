import { Component, OnInit } from "@angular/core";

//to receive product data, first import Input
import { Input } from "@angular/core";

import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  //The @Input() decorator indicates that the property value passes in from the component's parent
  @Input() product;

  //@Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();

  //we don't use them, the following code example omits them for brevity.
  //constructor() {}
  //ngOnInit() {}
}
