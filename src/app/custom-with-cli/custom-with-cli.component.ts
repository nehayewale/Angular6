import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-with-cli',
  templateUrl: './custom-with-cli.component.html',
  styleUrls: ['./custom-with-cli.component.css']
})
export class CustomWithCLIComponent implements OnInit {

  name : string = 'Neha';
  fullName: string = 'Neha Yewale';

  alloNewServer = false;
  serverMsg = "Server not initialise";
  serverName = "";
  //method interpolation

  getServerDetails(){
    return this.fullName;
  }

  constructor() { 
    setTimeout(() => {
      this.alloNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onServerInitialise(){
    this.serverMsg = "Server Initialise!!!";
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
