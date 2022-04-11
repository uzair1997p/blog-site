import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-createblogs',
  templateUrl: './createblogs.component.html',
  styleUrls: ['./createblogs.component.css']
})
export class CreateblogsComponent implements OnInit {

  constructor() { }



  blog_object:any={
    title:"",
    author:"",
    description:"",
    imageUrl:"",
    isReadMore:true
  }
 
  @Output() sendBlogItemEvent =new EventEmitter<object>();
  
  handleFileInput(event:any) {
    this.blog_object.imageUrl = '../../../../../assets/'+event.target.files[0].name;

  }
  handleForm(){
    this.sendBlogItemEvent.emit(this.blog_object)
    this.blog_object={}
  }

  ngOnInit(): void {
  }

}
