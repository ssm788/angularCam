import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  // private apiURL = "https://jsonplaceholder.typicode.com";
   private apiURL = "http://localhost:8080/api/v1/auth";
   
     
   /*------------------------------------------
   --------------------------------------------
   Http Header Options
   --------------------------------------------
   --------------------------------------------*/
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*',
       'Authorization':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaHlhbSIsImlhdCI6MTY3OTY1NjYxOSwiZXhwIjoxNjc5NjU4NDE5fQ.cLBinvXgT78UcVeHAYj7ZkvvluIRL6dzLmrqI2Ci7Zw'
     })
   }
    
   /*------------------------------------------
   --------------------------------------------
   Created constructor
   --------------------------------------------
   --------------------------------------------*/
   constructor(private httpClient: HttpClient) { }
     
   /**
    * Write code on Method
    *
    * @return response()
    */
   getAll(): Observable<any> {
   
     return this.httpClient.get(this.apiURL + '/camera',this.httpOptions)
   
     .pipe(
       catchError(this.errorHandler)
     )
   }
     
   /**
    * Write code on Method
    *
    * @return response()
    */
   login(post:any): Observable<any> {
   
      //return this.httpClient.post(this.apiURL + '/camera/', JSON.stringify(post), this.httpOptions)
     return this.httpClient.post(this.apiURL + '/authentication', post)
   
     .pipe(
       catchError(this.errorHandler)
     )
   }  
     
   /**
    * Write code on Method
    *
    * @return response()
    */
   find(id:number): Observable<any> {
   
     return this.httpClient.get(this.apiURL + '/camera/' + id)
   
     .pipe(
       catchError(this.errorHandler)
     )
   }
     
   /**
    * Write code on Method
    *
    * @return response()
    */
   update(id:number, post:any): Observable<any> {
   
     return this.httpClient.put(this.apiURL + '/camera/' + id, post)
  
     .pipe( 
       catchError(this.errorHandler)
     )
   }
        
   /**
    * Write code on Method
    *
    * @return response()
    */
   delete(id:number){
     return this.httpClient.delete(this.apiURL + '/camera/' + id, this.httpOptions)
   
     .pipe(
       catchError(this.errorHandler)
     )
   }
       
   /** 
    * Write code on Method
    *
    * @return response()
    */
   errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
     } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     return throwError(errorMessage);
  }
   }
 
