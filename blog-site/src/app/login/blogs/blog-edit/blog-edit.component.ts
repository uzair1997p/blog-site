import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  

  constructor(
    public dialogRef: MatDialogRef<BlogEditComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  blog_object:any={
    title:"",
    author:"",
    description:"",
    imageUrl:"",
    isReadMore:true
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  
  formtoedit=true
  handleFileInput(event:any) {
    this.blog_object.imageUrl = '../../../../../assets/'+event.target.files[0].name;
  }
  handleFormEdit(){
    this.formtoedit=false
    this.blog_object={}
  }
  
  ngOnInit(): void {
    this.blog_object=this.data.dataKey
  }

}
