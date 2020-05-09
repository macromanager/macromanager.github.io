import {Component} from "@angular/core";
import {AppSplashScreenManager} from "../utilities/AppSplashScreenManager";

@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "app-ui",
    templateUrl: "../views/app.html",
    styleUrls: ["../assets/styles/app.scss"]
})
export class AppComponent {
    private splashManager: AppSplashScreenManager;
    public isBusy: boolean = false;

    constructor(splashScreenManager: AppSplashScreenManager) {
        this.splashManager = splashScreenManager;
        this.splashManager.SetSplashScreenRequestHandler(this.SetBusyIndicator.bind(this));
    }

    private SetBusyIndicator(isVisible: boolean): void {
        this.isBusy = isVisible;  
    }



}