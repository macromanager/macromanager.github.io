import {Component} from "@angular/core"
import {Card} from "../models/Card"
import {ProductInfoService} from "../services/ProductInfoService";


@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "home-page-ui",
    templateUrl: "../views/home.html",
    styleUrls: ["../assets/styles/home.scss"]
})
export class HomeComponent {
    constructor(private prodInfoService: ProductInfoService) { }
    public cards: Card[];
    public slideUrls: string[];


    ngOnInit() {
        this.setImageUrls();
        this.setCards();
    }
 
    private setImageUrls(): void {
        this.slideUrls = this.prodInfoService.getImageUrls();
    }

    private setCards(): void{
        this.cards = this.prodInfoService.getCards();
    }

 
    
}
