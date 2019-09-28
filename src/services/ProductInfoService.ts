import { Injectable } from '@angular/core';
import { AppConfig } from '../utilities/AppConfig';
import {Card} from '../models/Card';
import {Installer} from '../models/Installer';


@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
    private config: AppConfig;
    private productName: string;
    private logoUrl: string;
    private email: string;
    private imageUrls: string[];
    private cards: Card[];
    private installers: Installer[];
  
    constructor() {
      this.config = new AppConfig;
      this.productName = "MacroManager";
      this.logoUrl = this.config.getUploadsPath() + '/macro-manager-images/MacroManager Logo Stacked-light.png';
      this.email = "MacroManagerInfo@gmail.com";
      this.imageUrls = this.initializeImages();
      this.cards = this.initializeCards();
      this.installers = this.initializeInstallers();
    }

    public getEmail(){
      return this.email;
    }

    public getLogoUrl(isDark = true){
      return this.logoUrl;
    }

    public getInstallers(): Installer[]{
      return this.installers;
    }



    public  getImageUrls(): string[]{
      return this.imageUrls;
    }

    public getCards(){
      return this.cards;
    }



    private initializeImages(){
      var imagesPath = this.config.getUploadsPath() + '/macro-manager-images';
      var urls = [
        imagesPath + '/macro_packages.png',
        imagesPath + '/macro_macroEditor_properties.png',
        imagesPath + '/macro_macroEditor_code.png',
        imagesPath + '/macro_account_packages.png',
        imagesPath + '/macro_install.png',
        // '/images/macro-manager-images/macro_login.png',
      ]
      return urls;
    }

    private initializeInstallers(): Installer[]{
      var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
      var title = 'MacroManager';
      var version = '1.0.7';
      var url = downloadsPath + '/MacroManager_v1.0.7.msi';
      var installer1 = new Installer(title + "_v" + version, version, url);

      var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
      var title = 'MacroManager';
      var version = '1.0.8';
      var url = downloadsPath + '/MacroManager_v1.0.8.msi';
      var installer2 = new Installer(title + "_v" + version, version, url);


      var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
      var title = 'MacroManager';
      var version = '1.0.9';
      var url = downloadsPath + '/MacroManager_v1.0.9.msi';
      var installer3 = new Installer(title + "_v" + version, version, url);


      var downloads: Installer[] = [
        installer3,
        installer2, 
        installer1,
      ]
      return downloads;
    }


    private initializeCards(): Card[]{
      var cards = [
        new Card('Learn', 'Get started by completing a quick tutorial that demonstates how to install a package', '/learn'),
        new Card('Download', 'Follow this link to get the latest version of this application', '/downloads')
      ]
      return cards;
    }


}