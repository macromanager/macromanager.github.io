import {Customer} from '../models/Customer'
import {Component} from "@angular/core"

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "customer-ui",
    templateUrl: "../views/customer.html",
    //styleUrls: ["../assets/styles/css/customer.css"]
})
export class CustomerComponent {
    CurrentCustomer:Customer = new Customer();
}