//import {Customer} from '../models/Customer'
import {Component} from "@angular/core"

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "header-ui",
    templateUrl: "../views/header.html",
    styleUrls: ["../assets/styles/css/header.css"]
})
export class HeaderComponent {
    private isMobileMenuVisibility: boolean = false;


    private menuClickHandler(): void {
        var menu = document.getElementById('collapseMobileMenu');
        menu.classList.remove("show");

    }
    
}