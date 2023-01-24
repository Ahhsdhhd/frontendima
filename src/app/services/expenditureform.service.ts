import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpenditureformService {
  constructor(private http: HttpClient) { }

  addExpenditureForm(expenditure: any) {
    return this.http.post(
      `${environment.baseUrl}` + 'ExpenditureForm',
      expenditure
    );
  }
  listExpenditureForm() {
    return this.http.get<any[]>(`${environment.baseUrl}` + 'ExpenditureForm');
  }

  addBulkExpenditureForm(bulkExpenditure: any) {
    return this.http.post(
      `${environment.baseUrl}` + 'reportsForm/' + 'bulkAdd',
      bulkExpenditure
    );
  }
  addBulkReceiptForm(bulkReceipt: any) {
    return this.http.post(
      `${environment.baseUrl}` + 'reportsForm/' + 'bulkReceiptAdd',
      bulkReceipt
    );
  }

  listReportByGcNumber(gcNumber: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'gcNumber/' + gcNumber
    );
  }
  listReportByCountry(country: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'country/' + country
    );
  }
  listReportByCompany(company: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'company/' + company
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
  listReportByPrefix(prefix: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'prefix/' + prefix
    );
  }



}
