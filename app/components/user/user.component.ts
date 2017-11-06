import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran..')
   }

  ngOnInit() {
    this.name = 'Zichen Li';
    this.age = 30;
    this.email = 'test@test.com'
    this.address = {
      street:'2244 W Taylor',
      city:'Chicago',
      state:'IL'
    }
    this.hobbies = ['Write code','Watch movies','Listen to music'];
    this.hello = 'hello';

    
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    })
    

    console.log('ngOnInit ran...')
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
  onClick(){
    this.name = 'Awesome';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies = this.hobbies.filter(item => item != hobby)
       //console.log( this.hobbies.splice(i,1));
      }
    }
  }
}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title:string,
  post:string
}