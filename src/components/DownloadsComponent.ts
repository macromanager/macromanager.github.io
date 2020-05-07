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
    public isBusy: boolean = true;
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
            // this.setSplashscreenVisibility(false);
            this.isBusy = false;
            this.installers = installers;
        })
    }



    public installerClickHandler(event: any){
        event.preventDefault();
        var target = event.target;
        var parent = target.parentElement;
        var splash = parent.getElementsByTagName("splashscreen-ui")[0];        
        splash.removeAttribute("hidden");

        var version = target.attributes.version.nodeValue;
        this.productInfoService.DownLoadInstaller(version)
        .then(function(){
            splash.setAttribute("hidden", true);
        })

    }    
}
