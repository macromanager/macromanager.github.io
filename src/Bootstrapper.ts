import {IocRegistrations} from "./IocRegistrations";
import {createContainer, AwilixContainer} from 'awilix';

export class Bootstrapper {
    public static container: AwilixContainer;
    public static components: any[];

    public static initialize(){
        this.container = createContainer();
        this.components = [];
        IocRegistrations.loadServices(this.container);
        this.components = IocRegistrations.loadComponents(this.container);
    }

    public static getInstanceByString(typeName: string) {
        arguments
        var service = this.container.resolve('ProductInfoService')
        return 
    }

    public static getInstanceByType<T>(typeArg : T&Function): T {
        var typeName = typeArg.name;
        var service: T = this.container.resolve(typeName);
        return service;
    }

}