import { Component } from '@angular/core';

@Component({
    selector: 'app-structuraldirective',
    templateUrl: 'structuraldirective.component.html',
    styles: [`
        .online{
            color:white;
        }
        .textwhite{
            color: white;
        }
    `]
})

export class Structuraldirective{
    servername : string = "";
    servercreated = false;
    serverid :number = 10;
    serverstatus :string = "offline";
    showSecrete = false;
    log = [];

    constructor(){
        this.serverstatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    addServer() : void{
        this.servercreated = true;
    }

    getserverstatus(){
        return this.serverstatus;
    }

    getColor(){
        return this.serverstatus === 'online' ? 'green' : 'red';
    }

    showToggleDetails(){
        this.showSecrete = !this.showSecrete;
       // this.log.push(this.log.length + 1);
       this.log.push(new Date);
    }
}