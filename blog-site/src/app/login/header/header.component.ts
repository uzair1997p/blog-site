import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }
  @Input()   name:string ="";
  @Input()  imageUrl:string ="";
  @Output() sendMenuItemEvent =new EventEmitter<string>();

  selectedMenuItem:string=""

  ngOnInit(): void {
  }

  selectMenuItem(event:any){
    this.selectedMenuItem=event.target.innerText
    this.sendMenuItemEvent.emit(this.selectedMenuItem.toLowerCase())
  }

}
