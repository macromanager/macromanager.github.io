import {Component, Input} from "@angular/core"
import {ProductInfoService} from "../services/ProductInfoService";

// import {Card} from '../models/Card'

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "splashscreen-ui",
    templateUrl: "../views/splashscreen.html",
    styleUrls: ["../assets/styles/css/splashscreen.css"]
})
export class SplashscreenComponent {
    @Input() size: string;

    constructor(productInfoService: ProductInfoService) {
        this.prodInfoService = productInfoService
    }
    private prodInfoService: ProductInfoService;
    public spinnerImgUrl: string;

    ngOnInit() {

        this.setSpinnerUrl();
    }


    //   @Input()
    //   set isVisible(isVisible: boolean) {
        
    //     console.log(isVisible);
    //     //this.setSplashscreenVisibility(isVisible);
    //   }

    private setSpinnerUrl(): void {
        this.spinnerImgUrl = this.prodInfoService.getSpinnerUrl();
    }

    // private setSplashscreenVisibility(isVisible: boolean): void{
    //     var splash = document.getElementsByClassName('splash-container')[0];
    //     splash.classList.remove("hide");
    //     if(!isVisible){ splash.classList.add("hide"); }
    // }
}