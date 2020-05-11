import {Component} from "@angular/core";
import {AppSplashScreenManager} from "../utilities/AppSplashScreenManager";
import {Notice} from "../models/Notice";
import { setTimeout, clearTimeout } from "timers";
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
    public showNotice: boolean = false;
    public notice: Notice = new Notice("test message", "info");
    private noticeTimer;
    private noticeDuration = 2000;
    

    constructor(splashScreenManager: AppSplashScreenManager) {
        this.splashManager = splashScreenManager;
        this.splashManager.setSplashScreenRequestHandler(this.SetBusyIndicator.bind(this));
        //this.splashManager.setNoticeRequestHandler(this.displayNotice.bind(this));
    }

    private SetBusyIndicator(isVisible: boolean): void {
        this.isBusy = isVisible; 
        if(isVisible) { this.setNoticeTimer(); }
        else {
            clearTimeout(this.noticeTimer);
        }
    }

    private noticeManuallyClosed(): void {
        this.displayNotice(false);
        this.noticeTimer = null;
    }

    private displayNotice(isVisible, message = "", severity = "info"){
        this.showNotice = isVisible;
        this.notice = new Notice(message, severity);
        if(isVisible){
            setTimeout(() => {
                this.displayNotice(false);
            }, this.noticeDuration);
        }
    }

    private setNoticeTimer(){
        this.noticeTimer = setTimeout(()=>{
            this.displayNotice(true, "This may take a few more seconds while the sever boots up", "slow");
        }, 1500)
    }



}