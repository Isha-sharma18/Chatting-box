import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { setRootDomAdapter } from '../../node_modules/@angular/platform-browser/src/dom/dom_adapter';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MapOperator } from '../../node_modules/rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ChatboxService {
  httpOpt = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization':'Basic QUNkZjBjYTZlYjNhNGU1OTYzMTM4M2MwMDczMGRjNjY5MzphY2Y3NmQ4YmM3YjQ3MDNmN2JlNGYxZWNiZmVjYTJkYw=='
    })
  }
  constructor(private http:HttpClient) { }
//create new service
  setData():Observable<any> {
    return this.http.post<any>('https://chat.twilio.com/v2/Services','FriendlyName=newService',this.httpOpt);
  }
  //create new channel
  addChannel():Observable<any> {
    return this.http.post("https://chat.twilio.com/v2/Services/"+this.serviceId+"/Channels","FriendlyName=enjoy&UniqueName=here",this.httpOpt);
 }
//searching all channel in the service
searchChannel():Observable<any>{ 
  return  this.http.get("https://chat.twilio.com/v2/Services/"+this.serviceId+"/Channels",this.httpOpt).pipe(map(data=>data)); 
}

myChannelId:string="CH0c1b1d2102af4522b2fe59f99eba5d34";
 identity:string="isha1826@gmail.com";
 serviceId:string='IS629977dbd0824736aec67c544c4f3a26'


//joining a channel
  joinChannel(channelId):Observable<any>{
    // this.myChannelId=channelId;
    return this.http.post("https://chat.twilio.com/v2/Services/"+this.serviceId+"/Channels/"+channelId+"/Members","ChannelSid="+channelId+"&Identity="+this.identity+"&ServiceSid="+this.serviceId,this.httpOpt); 
  }

sendMessage(messages):Observable<any>{
  return this.http.post("https://chat.twilio.com/v2/Services/"+this.serviceId+"/Channels/"+this.myChannelId+"/Messages","ChannelSid="+this.myChannelId+"&ServiceSid="+this.serviceId+"&Body="+messages+"&From="+this.identity,this.httpOpt); 
}

showMessages():Observable<any>{
  return this.http.get("https://chat.twilio.com/v2/Services/"+this.serviceId+"/Channels/"+this.myChannelId+"/Messages",this.httpOpt).pipe(map(data=>data));
}
DisplayAllChannel():Observable<any> {
  return this.http.get('https://chat.twilio.com/v2/Services/'+this.serviceId+'/Channels', this.httpOpt);
}
}

