import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class ParkingData {    
    constructor(public http: HttpClient) {
        console.log('Hello ParkingData Provider');
    }
 
    getRemoteData(){
        return this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot').map(res => res);
    }

    getLocalData(){
        return this.http.get('assests/data/parkingData.json').map(res => res);
    }
 
}