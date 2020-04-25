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
    public installers: Installer[];
    private productInfoService: ProductInfoService;

    constructor(prodInfoService: ProductInfoService) {
        this.productInfoService = prodInfoService;
    }

    ngOnInit() {
        this.setDownloads();
    }
 
    private setDownloads(): void {
        this.productInfoService.getInstallers()
        .then(installers => {
            this.installers = installers;
        })
    }

    public installerClickHandler(event: any){
        event.preventDefault();
        var target = event.target;
        var version = target.attributes.version.nodeValue;
        this.productInfoService.DownLoadInstaller(version)
        // .then(installers => {
        //     this.installers = installers;
        // })
    }

    // private setCards(): void{
    //     this.cards = this.prodInfoService.getCards();
    // }

 
    
}
