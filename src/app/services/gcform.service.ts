import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';







@Injectable({
  providedIn: 'root'
})
export class GcformService {


  private messageSourse = new BehaviorSubject<string>("test");
  currentMessage = this.messageSourse.asObservable();
  constructor(


    private http:HttpClient
    ) {

    }
    changeMessage(message: string){
      this.messageSourse.next(message)
       }

addGc(gc:any){

return this.http.post(`${environment.baseUrl}`+'GcForm',gc)


  }
  listGc(){

    return this.http.get<any[]>(`${environment.baseUrl}`+'GcForm')


      }
      updateGcList(){

        return this.http.get<any[]>(`${environment.baseUrl}/GcForm/$(gcNumber)`)
      }



}

