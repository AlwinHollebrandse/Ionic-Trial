import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParkingData } from '../../dataSource/JSONSource';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  display = "yes";
  remoteData = "temp";
  localData = "temp";

  constructor(public navCtrl: NavController, public parkingService: ParkingData) {

  }

  ionViewDidLoad(){
    this.parkingService.getRemoteData()
      .subscribe(data => {
          this.remoteData = JSON.stringify(data);
          //console.log("subscribe remoteData: " + this.remoteData);//correct value. async is bs
          if(this.remoteData !== "temp") {
            this.display = this.remoteData;
          }
          else {
            this.display = "We're sorry, but we can't seem to find any info about your parking space"//could also just return "no parking available"
          }
      });

    this.parkingService.getLocalData()
      .subscribe(data => {
          this.localData = JSON.stringify(data);
          console.log("subscribe localData: " + this.localData);//correct value. async is bs
          if(this.localData !== "temp") {
            this.display = this.localData;
          }
          else {
            this.display = "We're sorry, but we can't seem to find any info about your parking space"//could also just return "no parking available"
          }
      });
  }
}
