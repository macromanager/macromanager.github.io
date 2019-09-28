//import {Customer} from '../models/Customer'
import {Component} from "@angular/core";
import {ProductInfoService} from "../services/ProductInfoService";


@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "header-ui",
    templateUrl: "../views/header.html",
    styleUrls: ["../assets/styles/css/header.css"]
})
export class HeaderComponent {
    constructor(private prodInfoService: ProductInfoService) {
    }
    public logoUrl: string;
    private isMobileMenuVisibility: boolean = false;


    private menuClickHandler(): void {
        var menu = document.getElementById('collapseMobileMenu');
        menu.classList.remove("show");

    }

    ngOnInit() {
        this.setLogo();
        //this.setCards();
    }
 
    private setLogo(): void {
        this.logoUrl = this.prodInfoService.getLogoUrl();
    }
    
}