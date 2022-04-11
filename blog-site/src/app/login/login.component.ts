import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    users = [
    {
      email: "test1@test.com",
      password: "abcd@1234",
      name:"Ali",
      image:"avatar.png"
    },
    {
      email: "test2@test.com",
      password: "abcd@1234",
      name:"Kamran",
      image:"avatar.png"
    }
   ]
   blockedusers=new Map();
  constructor(private toastr: ToastrService) { 
    
     
  }

  authenticated=false;
  email="";
  password="";
  username:string=""   //email will be used as username which will be used to edit blogs   

  usernameauthenticated:string =""
  imageauthenticated:string =""
  selectedMenuItem:string =""
  addedBlogObject:any=null

  updateSelectedMenuItem(menuItem:string){
    this.selectedMenuItem=menuItem
    console.log(this.selectedMenuItem)
    if(this.selectedMenuItem=="logout"){
      this.authenticated=false
    }
  }
  showToasterSuccess(){
    this.toastr.success("User Authenticated !",'',{positionClass: 'toast-center'}) 
  }
  showToasterFailiure(){
    this.toastr.error("User or password is incorrect") 
  }
  showToasterBlock(){
    this.toastr.error("User is blocked as user entered wrong password 3 or more times") 
  }
  authenticateUser(){

    for (let user of this.users) {
      if(user.email==this.email && user.password==this.password){   //if user is authenticated
        this.authenticated=true;
        this.showToasterSuccess()
        this.usernameauthenticated=user.name
        this.imageauthenticated=user.image

        //setting email and password fields to empty
        this.username=this.email
        this.email=""
        this.password=""

        return true;
      }
    }
    this.authenticated=false;

    if(this.blockedusers.get(this.email)==3){   //if three times wrong password is entered
      this.showToasterBlock();

      //setting email and password fields to empty
      this.email=""
      this.password=""

      return false;
    }
    else{
      this.blockedusers.set(this.email, (this.blockedusers.get(this.email) ?? 1) + 1)
    }

    this.showToasterFailiure()

    //setting email and password fields to empty
    this.email=""
    this.password=""

    return false;
  }
  fetchBlogItem(blogObject:object){
    this.addedBlogObject=blogObject
  }

  ngOnInit(): void {
  }

}
