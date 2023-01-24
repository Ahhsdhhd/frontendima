import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxPopperjsModule } from 'ngx-popperjs';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AddCoursesComponent } from './add-courses/add-courses/add-courses.component';
import { BankReportComponent } from './bank-reports/bank-report/bank-report.component';
import { GentlemanCadetsComponent } from './gentleman-cadets/gentleman-cadets/gentleman-cadets.component';
import { AdministratorComponent } from './administrator/administrator/administrator.component';
import { CdaComponent } from './cda/cda/cda.component';
import { ReportsComponent } from './report/reports/reports.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './add-course/menu/menu.component';
import { GcViewComponent } from './gentleman-cadets/gcView/gcView.component';
import { GcForeginerComponent } from './gentleman-cadets/gcForeginer/gcForeginer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CdaViewComponent } from './cda/cda-view/cda-view.component';
import { ReportViewComponent } from './report/report-view/report-view.component';
import { SearchByGcComponent } from './report/reports/search-by-gc/search-by-gc.component';
import { SearchByBattalionsComponent } from './report/reports/search-by-battalions/search-by-battalions.component';
import { MonthWiseReportComponent } from './report/reports/month-wise-report/month-wise-report.component';
import { BillNoDetailsSearchComponent } from './report/reports/bill-no-details-search/bill-no-details-search.component';
import { ByAmountSearchComponent } from './report/reports/by-amount-search/by-amount-search.component';
import { BillingPageComponent } from './billing_of_cadets/billing-page/billing-page.component';
import { ExpenditureFormComponent } from './billing_of_cadets/billing-page/expenditure-form/expenditure-form.component';
import { ViewExpenditureComponent } from './billing_of_cadets/billing-page/expenditure-form/view-expenditure/view-expenditure.component';
import { DeleteExpenditureComponent } from './billing_of_cadets/billing-page/expenditure-form/delete-expenditure/delete-expenditure.component';
import { CopyExpenditureComponent } from './billing_of_cadets/billing-page/expenditure-form/copy-expenditure/copy-expenditure.component';
import { ReceiptFormComponent } from './billing_of_cadets/billing-page/receipt-form/receipt-form.component';
import { ViewReceiptComponent } from './billing_of_cadets/billing-page/receipt-form/view-receipt/view-receipt.component';
import { DeleteReceiptComponent } from './billing_of_cadets/billing-page/receipt-form/delete-receipt/delete-receipt.component';
import { CopyReceiptComponent } from './billing_of_cadets/billing-page/receipt-form/copy-receipt/copy-receipt.component';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { ExpenditureReportComponent } from './all-reports/expenditure-report/expenditure-report.component';
import { ReceiptReportComponent } from './all-reports/receipt-report/receipt-report.component';
import { FullReportComponent } from './all-reports/full-report/full-report.component';
import { AllExpenditureComponent } from './all-reports/expenditure-report/all-expenditure/all-expenditure.component';
import { NgxPrintModule } from 'ngx-print';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AllReceiptComponent } from './all-reports/receipt-report/all-receipt/all-receipt.component';
import { ByGcExpenditureReportComponent } from './all-reports/expenditure-report/by-gc-expenditure-report/by-gc-expenditure-report.component';
import { ByBattalionsExpenditureReportComponent } from './all-reports/expenditure-report/by-battalions-expenditure-report/by-battalions-expenditure-report.component';
import { ByCountryExpenditureReportComponent } from './all-reports/expenditure-report/by-country-expenditure-report/by-country-expenditure-report.component';
import { ByStatusExpenditureReportComponent } from './all-reports/expenditure-report/by-status-expenditure-report/by-status-expenditure-report.component';
import { ForeingnerExpenditureReportComponent } from './all-reports/expenditure-report/foreingner-expenditure-report/foreingner-expenditure-report.component';
import { ByDateExpenditureReportComponent } from './all-reports/expenditure-report/by-date-expenditure-report/by-date-expenditure-report.component';
import { ByMonthExpenditureReportComponent } from './all-reports/expenditure-report/by-month-expenditure-report/by-month-expenditure-report.component';
import { ByBillNoDetailsExpenditureReportComponent } from './all-reports/expenditure-report/by-bill-no-details-expenditure-report/by-bill-no-details-expenditure-report.component';
import { ByBattalionsReceiptReportComponent } from './all-reports/receipt-report/by-battalions-receipt-report/by-battalions-receipt-report.component';
import { ByCountryReceiptReportComponent } from './all-reports/receipt-report/by-country-receipt-report/by-country-receipt-report.component';
import { ByPrefixReceiptReportComponent } from './all-reports/receipt-report/by-prefix-receipt-report/by-prefix-receipt-report.component';
import { ByStatusReceiptReportComponent } from './all-reports/receipt-report/by-status-receipt-report/by-status-receipt-report.component';
import { ForeingnerReceiptReportComponent } from './all-reports/receipt-report/foreingner-receipt-report/foreingner-receipt-report.component';
import { ByDateReceiptReportComponent } from './all-reports/receipt-report/by-date-receipt-report/by-date-receipt-report.component';
import { ByMonthReceiptReportComponent } from './all-reports/receipt-report/by-month-receipt-report/by-month-receipt-report.component';
import { ByBillNoDetailsReceiptReportComponent } from './all-reports/receipt-report/by-bill-no-details-receipt-report/by-bill-no-details-receipt-report.component';
import { ByAmountReceiptReportComponent } from './all-reports/receipt-report/by-amount-receipt-report/by-amount-receipt-report.component';
import { ByAmountExpenditureReportComponent } from './all-reports/expenditure-report/by-amount-expenditure-report/by-amount-expenditure-report.component';
import { ExpenditureAmountTableComponent } from './all-reports/expenditure-report/by-amount-expenditure-report/expenditure-amount-table/expenditure-amount-table.component';
import { ExpenditureGcnumberTableComponent } from './all-reports/expenditure-report/all-expenditure/expenditure-gcnumber-table/expenditure-gcnumber-table.component';
import { ExpenditureByBattalionComponent } from './all-reports/expenditure-report/by-battalions-expenditure-report/expenditure-by-battalion/expenditure-by-battalion.component';
import { ExpenditureCountryTableComponent } from './all-reports/expenditure-report/by-country-expenditure-report/expenditure-country-table/expenditure-country-table.component';
import { ExpenditurePrefixTableComponent } from './all-reports/expenditure-report/by-gc-expenditure-report/expenditure-prefix-table/expenditure-prefix-table.component';
import { ReceiptBattalionTableComponent } from './all-reports/receipt-report/by-battalions-receipt-report/receipt-battalion-table/receipt-battalion-table.component';
import { ReceiptGcNumberTableComponent } from './all-reports/receipt-report/receipt-gc-number-table/receipt-gc-number-table.component';
import { ReceiptBillNoDetailsTableComponent } from './all-reports/receipt-report/by-bill-no-details-receipt-report/receipt-bill-no-details-table/receipt-bill-no-details-table.component';
import { ReceiptDateTableComponent } from './all-reports/receipt-report/by-date-receipt-report/receipt-date-table/receipt-date-table.component';
import { ReceiptMonthTableComponent } from './all-reports/receipt-report/by-month-receipt-report/receipt-month-table/receipt-month-table.component';
import { ReceiptPrefixTableComponent } from './all-reports/receipt-report/by-prefix-receipt-report/receipt-prefix-table/receipt-prefix-table.component';
import { ReceiptStatusTableComponent } from './all-reports/receipt-report/by-status-receipt-report/receipt-status-table/receipt-status-table.component';
import { ParticularGcExpenditureComponent } from './all-reports/expenditure-report/all-expenditure/particular-gc-expenditure/particular-gc-expenditure.component';
import { ExpenditureByStatusTableComponent } from './all-reports/expenditure-report/by-status-expenditure-report/expenditure-by-status-table/expenditure-by-status-table.component';
import { FullGcReportComponent } from './all-reports/full-report/full-gc-report/full-gc-report.component';
import { FullReportByGcComponent } from './all-reports/full-report/full-report-by-gc/full-report-by-gc.component';
import { FullReportByBattalionComponent } from './all-reports/full-report/full-report-by-battalion/full-report-by-battalion.component';
import { FullReportByCompanyComponent } from './all-reports/full-report/full-report-by-company/full-report-by-company.component';
import { FullReportByPrefixComponent } from './all-reports/full-report/full-report-by-prefix/full-report-by-prefix.component';
import { FullReportByStatusComponent } from './all-reports/full-report/full-report-by-status/full-report-by-status.component';
import { FullReportByForeingnerComponent } from './all-reports/full-report/full-report-by-foreingner/full-report-by-foreingner.component';
import { FullReportByDateComponent } from './all-reports/full-report/full-report-by-date/full-report-by-date.component';
import { FullReportByMonthComponent } from './all-reports/full-report/full-report-by-month/full-report-by-month.component';
import { FullReportByBillNoDetailsComponent } from './all-reports/full-report/full-report-by-bill-no-details/full-report-by-bill-no-details.component';
import { FullReportByAmountComponent } from './all-reports/full-report/full-report-by-amount/full-report-by-amount.component';
import { SingleGcReceiptComponent } from './all-reports/receipt-report/single-gc-receipt/single-gc-receipt.component';
import { SingleGcReportComponent } from './all-reports/full-report/single-gc-report/single-gc-report.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddCoursesComponent,
    BankReportComponent,
    GentlemanCadetsComponent,
    AdministratorComponent,
    CdaComponent,
    ReportsComponent,
    NavComponent,
    ReceiptFormComponent,
    MenuComponent,
    CopyExpenditureComponent,
    DeleteExpenditureComponent,
    GcViewComponent,
    GcForeginerComponent,
    CdaViewComponent,
    ReportViewComponent,
    SearchByGcComponent,
    SearchByBattalionsComponent,
    MonthWiseReportComponent,
    BillNoDetailsSearchComponent,
    ByAmountSearchComponent,
    BillingPageComponent,
    ExpenditureFormComponent,
    ViewExpenditureComponent,
    ViewReceiptComponent,
    CopyReceiptComponent,
    DeleteReceiptComponent,
    AllReportsComponent,
    ExpenditureReportComponent,
    ReceiptReportComponent,
    FullReportComponent,
    AllExpenditureComponent,
    AllReceiptComponent,
    ByGcExpenditureReportComponent,
    ByBattalionsExpenditureReportComponent,
    ByCountryExpenditureReportComponent,
    ByStatusExpenditureReportComponent,
    ForeingnerExpenditureReportComponent,
    ByDateExpenditureReportComponent,
    ByMonthExpenditureReportComponent,
    ByBillNoDetailsExpenditureReportComponent,
    ByBattalionsReceiptReportComponent,
    ByCountryReceiptReportComponent,
    ByPrefixReceiptReportComponent,
    ByStatusReceiptReportComponent,
    ForeingnerReceiptReportComponent,
    ByDateReceiptReportComponent,
    ByMonthReceiptReportComponent,
    ByBillNoDetailsReceiptReportComponent,
    ByAmountReceiptReportComponent,
    ByAmountExpenditureReportComponent,
    ExpenditureAmountTableComponent,
    ExpenditureGcnumberTableComponent,
    ExpenditureByBattalionComponent,
    ExpenditureCountryTableComponent,
    ExpenditurePrefixTableComponent,
    ReceiptBattalionTableComponent,
    ReceiptGcNumberTableComponent,
    ReceiptBillNoDetailsTableComponent,
    ReceiptDateTableComponent,
    ReceiptMonthTableComponent,
    ReceiptPrefixTableComponent,
    ReceiptStatusTableComponent,
    ParticularGcExpenditureComponent,
    ExpenditureByStatusTableComponent,
    FullGcReportComponent,
    FullReportByGcComponent,
    FullReportByBattalionComponent,
    FullReportByCompanyComponent,
    FullReportByPrefixComponent,
    FullReportByStatusComponent,
    FullReportByForeingnerComponent,
    FullReportByDateComponent,
    FullReportByMonthComponent,
    FullReportByBillNoDetailsComponent,
    FullReportByAmountComponent,
    SingleGcReceiptComponent,
    SingleGcReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPopperjsModule,
    HttpClientModule,
    Ng2SearchPipeModule,

    NgxPaginationModule,
    Ng2OrderModule,
    MatTableModule,
    NgxPrintModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
