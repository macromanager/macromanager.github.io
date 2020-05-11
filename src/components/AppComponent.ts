import {Component, Injectable} from "@angular/core";
import {AppRemoteManager} from "../utilities/AppRemoteManager";
import {IRemotable} from "../utilities/IRemotable";
import {Notice} from "../models/Notice";
import { setTimeout, clearTimeout } from "timers";
@Component({
    moduleId: module.id,
    //moduleId: __moduleName,
    selector: "app-ui",
    templateUrl: "../views/app.html",
    styleUrls: ["../assets/styles/app.scss"]
})
export class AppComponent implements IRemotable {
    public isBusy: boolean = false;
    public notices: Notice[] = [];
    

    constructor(appRemote: AppRemoteManager) {
        appRemote.setRemotable(this);
    }

    public setBusyIndicator(isVisible: boolean): void {
        console.log("in set busy")
        this.isBusy = isVisible; 
    }
    public setNotices(notices: Notice[]){
        console.log("in notices")
        this.notices.push(...notices);
    }
}