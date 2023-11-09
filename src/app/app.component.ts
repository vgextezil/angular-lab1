import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  greeting:string = "Hello world"
  title = 'labs-app';

  activateObject(menuObject:any){
    for (let obj of this.menuObjects){
      if(obj == menuObject){
        console.log(obj.title)
        obj.active = true;
      }
      else {obj.active = false;}
    }
  }

  menuObjects: Array<any> = [
    {
      title: "Home",
      active: false
    },
    {
      title: "Catalog",
      active: false
    },
    {
      title: "About",
      active: false
    },
  ]


  obj: Array<any> = [
    {
      name: 'Andriy',
      age: 30,

    },
    {
      name: 'Vasyl',
      age: 20,
    },
    {
      name: 'Maks',
      age: 12,
    },
  ];

}
