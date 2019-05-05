import { Injectable } from '@angular/core';
import { AppConfig } from '../utilities/AppConfig';
import {Card} from '../models/Card';

@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
    private config: AppConfig;
    private productName: string;
    private email: string;
    private imageUrls: string[];
    private cards: Card[];
    private downloadUrls: string[];
  
    constructor() {
      this.config = new AppConfig;
      this.productName = "MacroManager";
      this.email = "MacroManagerInfo@gmail.com";
      this.imageUrls = this.initializeImages();
      this.cards = this.initializeCards();
      this.downloadUrls = this.initializeDownloads();
    }

    public getDownloads(): string[]{
      return this.downloadUrls;
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

    private initializeDownloads(): string[]{
      var downloads: string[] = [
        
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