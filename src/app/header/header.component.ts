import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() greeting !:string;
  isVisible = false;
  setVisible() {
    this.isVisible = !this.isVisible;
  }

  @Input() menuObjects: any;
  @Output() updateActiveObjectEvent = new EventEmitter<any>();

  activateUpdateObject(menuObject: any){
    this.updateActiveObjectEvent.emit(menuObject)
  }
}
