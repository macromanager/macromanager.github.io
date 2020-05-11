export class Notice {
    constructor(message, severity = "info"){
        this.message = message;
        this.severity = severity;
    }
    public message: string;
    public severity: string;
}