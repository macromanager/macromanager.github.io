import { Injectable } from '@angular/core';
import { AppConfig } from '../utilities/AppConfig';
import { GateKeeperClient } from '../utilities/GateKeeperClient';

import {Card} from '../models/Card';
import {Installer} from '../models/Installer';
import { promises } from 'fs';



@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
    private config: AppConfig;
    private gateKeeperClient: GateKeeperClient;
    private productName: string;
    private logoUrl: string;
    private email: string;
    private imageUrls: string[];
    private cards: Card[];
  
    constructor(client: GateKeeperClient) {
      this.gateKeeperClient = client;
      this.config = new AppConfig;
      this.productName = "MacroManager";
      this.email = "evandsilverstein@gmail.com";
      this.imageUrls = this.initializeImages();
      this.cards = this.initializeCards();
    }

    public getEmail(){
      return this.email;
    }

    public getLogoUrl(isDark = true): string{
      return this.config.getUploadsPath() + '/main/MacroManager Logo Stacked-light.png';
    }

    public getSpinnerUrl(): string{
      return this.config.getUploadsPath() + '/main/spinner-circle.gif';
    }

    public getInstallers(){
      return this.gateKeeperClient.dispatchQuery("GetClientApplicationInstallerVersionsQuery")
      .then(function(data){
        var dataItems = data.items;
        var installers: Array<Installer> = [];
        dataItems.forEach(function(item){
          var installer = new Installer(item.title, item.version, item.filename)
          installers.push(installer);
        });
        return installers;
      });

    }

    public DownLoadInstaller(version){
      var queryData = {
        TargetVersion: version,
      };
      return this.gateKeeperClient.dispatchQuery("GetClientApplicationInstallerQuery", queryData)
      .then(data => {
        var arrayBuff = this.base64ToArrayBuffer(data.attachment);
        this.saveByteArray(data.filename, arrayBuff);
      });
    }

    private base64ToArrayBuffer(base64) {
      var binaryString = window.atob(base64);
      var binaryLen = binaryString.length;
      var bytes = new Uint8Array(binaryLen);
      for (var i = 0; i < binaryLen; i++) {
         var ascii = binaryString.charCodeAt(i);
         bytes[i] = ascii;
      }
      return bytes;
   }

   private saveByteArray(filename, byte) {
    var blob = new Blob([byte], {type: "application/octet-stream"});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}



    public getImageUrls(): string[]{
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

    private initializeCards(): Card[]{
      var cards = [
        new Card('Learn', 'Get started by completing a quick tutorial that demonstates how to install a package', '/learn'),
        new Card('Download', 'Follow this link to get the latest version of this application', '/downloads')
      ]
      return cards;
    }


}