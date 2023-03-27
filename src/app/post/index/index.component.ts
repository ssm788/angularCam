import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
      
  posts: Post[] = [];
 // token:String='';
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService,  private route: ActivatedRoute,
    private router: Router) {
   
   }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.idcamera !== id);
         console.log('Post deleted successfully!');
    })
  }

  logout(){
    // localStorage.removeItem('token');
    localStorage.clear();
         this.router.navigateByUrl('login');
   
  }
    
}