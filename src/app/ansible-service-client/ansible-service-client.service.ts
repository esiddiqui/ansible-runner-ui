import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnsibleServiceClientService {

  private configUrl: string = "http://localhost:8081/api/v1/ansible/playbook/executestream"  //"http://localhost:8081/api/v1/ansible/playbook/execute"
 


  constructor(private http: HttpClient) { 
  }

  executeAnsible() {
    console.log("AnsibleServiceClientService ");
    return this.http.get(this.configUrl,{responseType: 'text'});
    //.subscribe( (data: String) => console.log(data));
  }
}
