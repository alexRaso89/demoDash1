import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class UpdateServerService {

  constructor(private http:Http) { }
  updateStatus(url,status){
    let stsc="";
    if(status==false) stsc="400";
    if(status==true) stsc="200";
    console.log(url, status, stsc);

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.patch(url, JSON.stringify({"status":stsc}),{headers:headers}).map(response=>response.json());
  }
  salvaVoce(files:File[]){

    var url="https://westus.api.cognitive.microsoft.com/spid/v1.0/identificationProfiles/cc96d3ca-45da-46d8-a8a3-7638a2156e70/enroll?shortAudio=true";
    var headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Ocp-Apim-Subscription-Key', '216e24c174614fc1974d490f0c215358');

    const formData = new FormData();

    for(var i = 0; i < files.length; i++){
        formData.append(files[i].name, files[i]);
    }

    return this.http
        .post(url, formData, {headers: headers})
        .map((res) => {
            return res.json();
        });
  }
}
