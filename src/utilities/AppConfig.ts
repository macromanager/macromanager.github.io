//import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class AppConfig {

    private imagesPath: string;
  
    constructor() { 
        this.imagesPath = "/images";
    }

    public getImagesPath(){
        return this.imagesPath;
    }

    public getImageUrl(fileName){
        var imagesPath = this.getImagesPath();
        var fullpath = imagesPath + '/' + fileName;
        return fullpath;
        
    }

}