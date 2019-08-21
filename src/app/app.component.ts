import { Component } from '@angular/core';
import { appConstant } from './constant';
import { HttpService } from './http.service';

const endPoint = appConstant.baseUrl;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Test Gaiasys';
  public toolsArray: Array<any> = [];
  public usersArray: Array<any> = [];
  public toolsGroupArray: Array<any> = [];
  public acc;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.createGetRequest(endPoint + 'tools.json').subscribe((response: any) => {
      this.toolsArray = response;
    })
    this.httpService.createGetRequest(endPoint + 'toolsGroup.json').subscribe((response: any) => {
      this.toolsGroupArray = response;
    })
    this.httpService.createGetRequest(endPoint + 'users.json').subscribe((response: any) => {
      this.usersArray = response;
      console.log(response);
    })
  }
  ngAfterViewinit() {
//test
  }
  public toggleAccordion(index, value): void {
    document.getElementById(value + index).style.display == 'none' ? document.getElementById(value + index).style.display = 'block' : document.getElementById(value + index).style.display == 'block' ? document.getElementById(value + index).style.display = 'none' : '';
  }
}
