import { Component, OnInit } from '@angular/core';
import { AnsibleServiceClientService } from '../ansible-service-client/ansible-service-client.service'


@Component({
  selector: 'app-ansible-input-panel',
  templateUrl: './ansible-input-panel.component.html',
  styleUrls: ['./ansible-input-panel.component.css']
})
export class AnsibleInputPanelComponent implements OnInit {

  public pathToInventory : string = '/Users/ehteshamsiddiqui/Repos/bibliocommons/bc-deploy-provision/ansible/inventory/qa'
  public hostGroup : string = 'appservers';
  public hostLimit : string = '';
  public command : string = 'hostname -a';
  public httpr: string = 'waitinng...';

  constructor(private ansible: AnsibleServiceClientService) { }

  ngOnInit() {
     this.pathToInventory = '/Users/ehteshamsiddiqui/Repos/bibliocommons/bc-deploy-provision/ansible/inventory/qa'
     this.hostGroup  = 'appservers';
     this.hostLimit = '';
     this.command = 'hostname -a';
     this.httpr = "";
  }

  getAnsibleCommandPreview() {
    return "ansible " + this.hostGroup + " -v -i " + this.pathToInventory +  
        (this.hostLimit.length>0?" --limit " + this.hostLimit+ " ":" ") + " -a \"" + this.command + "\"";
  }

  toJson() {
    return JSON.stringify(this);
  }

  handleExecute() {
     this.hostGroup  = 'none';
     this.hostLimit = '';
     this.command  = 'env';
     this.httpr = "waiting..";


     this.ansible.executeAnsible().subscribe( 
       (data: string) => {
          console.log(data)
          this.httpr = data;
       });
     //this.ansible.executeAnsible()//.do(console.log);
     //.subscribe((res :string) => this.httpr = res);
  }

  handleClear() {
    this.ngOnInit();
  }

}
