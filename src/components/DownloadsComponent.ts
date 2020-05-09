import {Component} from "@angular/core"
import {Installer} from "../models/Installer"
import {ProductInfoService} from "../services/ProductInfoService";
import {AppSplashScreenManager} from "../utilities/AppSplashScreenManager";



@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "downloads-page-ui",
    templateUrl: "../views/downloads.html",
    styleUrls: ["../assets/styles/downloads.scss"]
})
export class DownloadsComponent {
    public installers: Installer[];
    private productInfoService: ProductInfoService;
    private appSplashScreenManager: AppSplashScreenManager;
    

    constructor(prodInfoService: ProductInfoService, appSplashScreenManager: AppSplashScreenManager) {
        this.productInfoService = prodInfoService;
        this.appSplashScreenManager = appSplashScreenManager;
    }

    ngOnInit() {
        this.setDownloads();
    }
 
    private setDownloads(): void {
        this.appSplashScreenManager.requestSplashScreen(true);
        this.productInfoService.getInstallers()
        .then(installers => {
            this.installers = installers;
            this.appSplashScreenManager.requestSplashScreen(false);

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
