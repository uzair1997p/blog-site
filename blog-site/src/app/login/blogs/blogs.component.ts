import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import BlogsData from '../../blogs.json';

export interface Blogs {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  isReadMore:boolean;
  createdby:string

}

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  
  @Input() addedBlogObject:any =null; 
  @Input() loggedinusername:string=""

  blogs:Blogs[]= BlogsData;
  filteredblogs:Blogs[]= BlogsData;
  

  dialogRef:any;
  searchTitle:string=""
  
  filterBlogs(){
    // setTimeout(()=>{  //because of bug of ngModelChange
    //   this.filteredblogs = this.blogs.filter((val) => val.title.toLowerCase().includes(this.searchTitle));
    // },200)
  }
  openDialog(index:number) {
    const dialogRef = this.dialog.open(BlogEditComponent,{
      width: '450px',
      data: {
        dataKey: this.blogs[index]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

   
  }
 

  showText(i:number) {
    this.blogs[i].isReadMore=!this.blogs[i].isReadMore
  //  this.isReadMore = !this.isReadMore
 }

  ngOnInit(): void {
  
     if (this.addedBlogObject !==null ){
      console.log(this.addedBlogObject)
      this.blogs.push(this.addedBlogObject)
      this.addedBlogObject={}
    }
    this.filteredblogs= this.blogs;


  }

}
