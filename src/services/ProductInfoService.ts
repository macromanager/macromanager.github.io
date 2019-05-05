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
  
    constructor() {
      this.config = new AppConfig;
      this.productName = "MacroManager";
      this.email = "MacroManagerInfo@gmail.com";
      this.imageUrls = this.initializeImages();
      this.cards = this.initializeCards();
    }


    public  getImageUrls(): string[]{
      return this.imageUrls;
    }

    public getCards(){
      return this.cards;
    }



    private initializeImages(){
      var imagesPath = this.config.getImagesPath() + '/macro-manager-images';
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


    private initializeCards(): Card[]{
      var cards = [
        new Card('Learn', 'Get started by completing a quick tutorial that demonstates how to install a package', '/learn'),
        new Card('Download', 'Follow this link to get the latest version of this application', '/downloads')
      ]
      return cards;
    }


}