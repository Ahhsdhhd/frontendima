import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AddCoursesComponent } from './add-courses/add-courses/add-courses.component';
import { GentlemanCadetsComponent } from './gentleman-cadets/gentleman-cadets/gentleman-cadets.component';
import { BankReportComponent } from './bank-reports/bank-report/bank-report.component';
import { ReportsComponent } from './report/reports/reports.component';
import { CdaComponent } from './cda/cda/cda.component';

import { AdministratorComponent } from './administrator/administrator/administrator.component';

import { MenuComponent } from './add-course/menu/menu.component';

import { GcViewComponent } from './gentleman-cadets/gcView/gcView.component';
import { GcForeginerComponent } from './gentleman-cadets/gcForeginer/gcForeginer.component';

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

import { ViewReceiptComponent } from './billing_of_cadets/billing-page/receipt-form/view-receipt/view-receipt.component';

import { DeleteReceiptComponent } from './billing_of_cadets/billing-page/receipt-form/delete-receipt/delete-receipt.component';

import { CopyReceiptComponent } from './billing_of_cadets/billing-page/receipt-form/copy-receipt/copy-receipt.component';
import { ReceiptFormComponent } from './billing_of_cadets/billing-page/receipt-form/receipt-form.component';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { ExpenditureReportComponent } from './all-reports/expenditure-report/expenditure-report.component';
import { AllExpenditureComponent } from './all-reports/expenditure-report/all-expenditure/all-expenditure.component';
import { ByBattalionsExpenditureReportComponent } from './all-reports/expenditure-report/by-battalions-expenditure-report/by-battalions-expenditure-report.component';
import { ByCountryExpenditureReportComponent } from './all-reports/expenditure-report/by-country-expenditure-report/by-country-expenditure-report.component';
import { ByBillNoDetailsExpenditureReportComponent } from './all-reports/expenditure-report/by-bill-no-details-expenditure-report/by-bill-no-details-expenditure-report.component';
import { ByGcExpenditureReportComponent } from './all-reports/expenditure-report/by-gc-expenditure-report/by-gc-expenditure-report.component';
import { ByStatusExpenditureReportComponent } from './all-reports/expenditure-report/by-status-expenditure-report/by-status-expenditure-report.component';
import { ForeingnerExpenditureReportComponent } from './all-reports/expenditure-report/foreingner-expenditure-report/foreingner-expenditure-report.component';
import { ByDateExpenditureReportComponent } from './all-reports/expenditure-report/by-date-expenditure-report/by-date-expenditure-report.component';
import { ByMonthExpenditureReportComponent } from './all-reports/expenditure-report/by-month-expenditure-report/by-month-expenditure-report.component';
import { ByAmountExpenditureReportComponent } from './all-reports/expenditure-report/by-amount-expenditure-report/by-amount-expenditure-report.component';

import { ReceiptReportComponent } from './all-reports/receipt-report/receipt-report.component';
import { AllReceiptComponent } from './all-reports/receipt-report/all-receipt/all-receipt.component';
import { ByBattalionsReceiptReportComponent } from './all-reports/receipt-report/by-battalions-receipt-report/by-battalions-receipt-report.component';
import { ByBillNoDetailsReceiptReportComponent } from './all-reports/receipt-report/by-bill-no-details-receipt-report/by-bill-no-details-receipt-report.component';
import { ByCountryReceiptReportComponent } from './all-reports/receipt-report/by-country-receipt-report/by-country-receipt-report.component';
import { ExpenditureCountryTableComponent } from './all-reports/expenditure-report/by-country-expenditure-report/expenditure-country-table/expenditure-country-table.component';
import { ByPrefixReceiptReportComponent } from './all-reports/receipt-report/by-prefix-receipt-report/by-prefix-receipt-report.component';
import { ByStatusReceiptReportComponent } from './all-reports/receipt-report/by-status-receipt-report/by-status-receipt-report.component';
import { ForeingnerReceiptReportComponent } from './all-reports/receipt-report/foreingner-receipt-report/foreingner-receipt-report.component';
import { ByAmountReceiptReportComponent } from './all-reports/receipt-report/by-amount-receipt-report/by-amount-receipt-report.component';
import { ByDateReceiptReportComponent } from './all-reports/receipt-report/by-date-receipt-report/by-date-receipt-report.component';
import { ByMonthReceiptReportComponent } from './all-reports/receipt-report/by-month-receipt-report/by-month-receipt-report.component';

import { FullReportComponent } from './all-reports/full-report/full-report.component';
import { ExpenditureGcnumberTableComponent } from './all-reports/expenditure-report/all-expenditure/expenditure-gcnumber-table/expenditure-gcnumber-table.component';

import { ExpenditureByBattalionComponent } from './all-reports/expenditure-report/by-battalions-expenditure-report/expenditure-by-battalion/expenditure-by-battalion.component';

import { ExpenditurePrefixTableComponent } from './all-reports/expenditure-report/by-gc-expenditure-report/expenditure-prefix-table/expenditure-prefix-table.component';
import { ExpenditureByStatusTableComponent } from './all-reports/expenditure-report/by-status-expenditure-report/expenditure-by-status-table/expenditure-by-status-table.component';

import { ParticularGcExpenditureComponent } from './all-reports/expenditure-report/all-expenditure/particular-gc-expenditure/particular-gc-expenditure.component';

import { ReceiptBattalionTableComponent } from './all-reports/receipt-report/by-battalions-receipt-report/receipt-battalion-table/receipt-battalion-table.component';

import { ReceiptStatusTableComponent } from './all-reports/receipt-report/by-status-receipt-report/receipt-status-table/receipt-status-table.component';
import { ReceiptDateTableComponent } from './all-reports/receipt-report/by-date-receipt-report/receipt-date-table/receipt-date-table.component';
import { ReceiptMonthTableComponent } from './all-reports/receipt-report/by-month-receipt-report/receipt-month-table/receipt-month-table.component';
import { ReceiptPrefixTableComponent } from './all-reports/receipt-report/by-prefix-receipt-report/receipt-prefix-table/receipt-prefix-table.component';
import { ReceiptBillNoDetailsTableComponent } from './all-reports/receipt-report/by-bill-no-details-receipt-report/receipt-bill-no-details-table/receipt-bill-no-details-table.component';
import { ReceiptGcNumberTableComponent } from './all-reports/receipt-report/receipt-gc-number-table/receipt-gc-number-table.component';
import { SingleGcReceiptComponent } from './all-reports/receipt-report/single-gc-receipt/single-gc-receipt.component';
import { SingleGcReportComponent } from './all-reports/full-report/single-gc-report/single-gc-report.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'addcourse', component: AddCoursesComponent },

  { path: 'gc', component: GentlemanCadetsComponent },
  { path: 'all', component: GcViewComponent },
  { path: 'foreginer', component: GcForeginerComponent },

  { path: 'billingPage', component: BillingPageComponent },
  { path: 'expenditureForm', component: ExpenditureFormComponent },
  { path: 'viewExpenditure', component: ViewExpenditureComponent },
  { path: 'copyExpenditure', component: CopyExpenditureComponent },
  { path: 'deleteExpenditure', component: DeleteExpenditureComponent },

  { path: 'receiptForm', component: ReceiptFormComponent },
  { path: 'viewReceipt', component: ViewReceiptComponent },
  { path: 'deleteReceipt', component: DeleteReceiptComponent },
  { path: 'copyReceipt', component: CopyReceiptComponent },

  { path: 'AllReports', component: AllReportsComponent },
  { path: 'expenditureReport', component: ExpenditureReportComponent },

  { path: 'allExpenditure', component: AllExpenditureComponent },
  {
    path: 'byCountryExpenditure',
    component: ByCountryExpenditureReportComponent,
  },
  {
    path: 'byBattalionExpenditure',
    component: ByBattalionsExpenditureReportComponent,
  },
  {
    path: 'byBillNoDetailsExpenditure',
    component: ByBillNoDetailsExpenditureReportComponent,
  },
  {
    path: 'byAmountExpenditure',
    component: ByAmountExpenditureReportComponent,
  },
  { path: 'byPrefixExpenditure', component: ByGcExpenditureReportComponent },
  {
    path: 'byStatusExpenditure',
    component: ByStatusExpenditureReportComponent,
  },
  {
    path: 'byStatusExpenditure/:status',component:ExpenditureByStatusTableComponent
  },
  { path: 'byMonthExpenditure', component: ByMonthExpenditureReportComponent },
  {
    path: 'foreingnerExpenditure',
    component: ForeingnerExpenditureReportComponent,
  },
  { path: 'byDateExpenditure', component: ByDateExpenditureReportComponent },
  {
    path: 'byGcNumberExpenditure/:gcNumber',
    component: ExpenditureGcnumberTableComponent,
  },
  {
    path: 'byBattalionExpenditure/:battalion',
    component: ExpenditureByBattalionComponent,
  },
  {
    path: 'byCompanyExpenditure/:company',
    component: ExpenditureCountryTableComponent,
  },
  {
    path: 'byPrefixExpenditure/:prefix',
    component: ExpenditurePrefixTableComponent,
  },
  {
    path: 'singleExpenditure/:gcNumber',component:ParticularGcExpenditureComponent
  },

  { path: 'receiptReport', component: ReceiptReportComponent },
  { path: 'allReceipt', component: AllReceiptComponent },
  {path: 'singleReceipt/:gcNumber',component:SingleGcReceiptComponent},
  { path: 'byGcNumberReceipt/:gcNumber', component: ReceiptGcNumberTableComponent },
  { path: 'byAmountReceipt', component: ByAmountReceiptReportComponent },
  { path: 'byBattalionReceipt', component: ByBattalionsReceiptReportComponent },
  {
    path: 'byBillNoDetailsReceipt',
    component: ByBillNoDetailsReceiptReportComponent,
  },
  { path: 'byCountryReceipt', component: ByCountryReceiptReportComponent },
  { path: 'byDateReceipt', component: ByDateReceiptReportComponent },
  { path: 'byMonthReceipt', component: ByMonthReceiptReportComponent },
  { path: 'byPrefixReceipt', component: ByPrefixReceiptReportComponent },
  { path: 'byStatusReceipt', component: ByStatusReceiptReportComponent },
  { path: 'foreingnerReceipt', component: ForeingnerReceiptReportComponent },
  {
    path: 'byBattalionReceipt/:battalion',
    component: ReceiptBattalionTableComponent,
  },

  { path: 'fullReport', component: FullReportComponent },
  { path:'singleReport/:gcNumber',component:SingleGcReportComponent},

  { path: 'cda', component: CdaComponent },
  { path: 'cdaView', component: CdaViewComponent },

  { path: 'admin', component: AdministratorComponent },
  { path: 'bankreport', component: BankReportComponent },

  // { path: 'reports', component: ReportsComponent },
  // { path: 'month', component: MonthWiseReportComponent },
  // { path: 'bygc', component: SearchByGcComponent },
  // { path: 'bybattalions', component: SearchByBattalionsComponent },
  // { path: 'report-view/:gcNumber', component: ReportViewComponent },
  // { path: 'report-view/', component: ReportViewComponent },
  // { path: 'billNoDetails', component: BillNoDetailsSearchComponent },
  // { path: 'byAmount', component: ByAmountSearchComponent },

  { path: 'menu', component: MenuComponent },

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
