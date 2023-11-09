import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  @Input() menuObjects: any;
  @Output() updateActiveObjectEvent = new EventEmitter<any>();

  activateUpdateObject(menuObject: any){
    this.updateActiveObjectEvent.emit(menuObject)
  }
}
