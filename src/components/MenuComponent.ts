//import {Customer} from '../models/Customer'
import {Component, Output, EventEmitter} from "@angular/core"

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "menu-ui",
    templateUrl: "../views/menu.html",
    styleUrls: ["../assets/styles/menu.scss"]
})
export class MenuComponent {
    @Output() navigationEvent = new EventEmitter();
    notifyNavigationOccured(event) {
        //console.log('navigation occured');
        console.log(event)

        var destination = event.target.text;
        console.log(destination)
        this.navigationEvent.emit(destination);
     } 
    //CurrentCustomer:Customer = new Customer();
}