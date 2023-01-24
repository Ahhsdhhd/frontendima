import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(private http: HttpClient) {}

  listReport(gcNumber: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'gcNumber/' + gcNumber
    );
  }
  listReportExpenditure() {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/'
    );
  }
  listReportByCountry(country: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'country/' + country
    );
  }
  listReportByBattalion(battalion: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'battalion/' + battalion
    );
  }
  listReportByDate(date: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'date/' + date
    );
  }
  listReportBySatus(status: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'status/' + status
    );
  }
  listReportByBillNoDetails(billNoDetails: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'billNoDetails/' + billNoDetails
    );
  }

}
