import {Component} from "@angular/core"
import {Installer} from "../models/Installer"
import {ProductInfoService} from "../services/ProductInfoService";


@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "downloads-page-ui",
    templateUrl: "../views/downloads.html",
    styleUrls: ["../assets/styles/css/downloads.css"]
})
export class DownloadsComponent {
    constructor(private prodInfoService: ProductInfoService) { }
    public installers: Installer[];


    ngOnInit() {
        this.setDownloads();
        //this.setCards();
    }
 
    private setDownloads(): void {
        this.installers = this.prodInfoService.getInstallers();
    }

    // private setCards(): void{
    //     this.cards = this.prodInfoService.getCards();
    // }

 
    
}
