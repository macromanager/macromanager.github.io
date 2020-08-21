import {Component} from "@angular/core"
import {Installer} from "../models/Installer"
import {ProductInfoService} from "../services/ProductInfoService";
import {Notice} from "../models/Notice";



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
    private isBusy: boolean;
    private notices: Notice[] = [];

    constructor(prodInfoService: ProductInfoService) {
        this.productInfoService = prodInfoService;
    }

    ngOnInit() {
        this.setDownloads();
    }

    private setNotices(): void {
        var notice1 = new Notice("This may take a few seconds while the server boots up", "info");
        var notice2 = new Notice("This is taking forever...", "info");
        var notice3 = new Notice("...I hope you're not a recruiter", "info");

        this.notices.push(notice1);
        this.notices.push(notice2);
        this.notices.push(notice3);

        notice1.begin(0, 2000);
        notice2.begin(4000, 1000*60*60*24);
        notice3.begin(6000, 1000*60*60*24);
    }
 
    private setDownloads(): void {
        this.setNotices();
        this.isBusy = true;
        this.productInfoService.getInstallers()
        .then(installers => {
            this.installers = installers;
        }).catch( err => {
            alert("There was an issue retrieving the installer. Please contact evandsilverstein@gmail.com to get the installer.")
        }).finally(() => {
            setTimeout(() => {
                this.notices.forEach((notice)=>{
                    notice.end();                
                })
                this.notices = [];
                this.isBusy = false;
            })
        })}



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
