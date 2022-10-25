import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { SumDetailToggleComponent } from './budget-page/sum-detail-toggle/sum-detail-toggle.component';
import { WeekMonthToggleComponent } from './budget-page/week-month-toggle/week-month-toggle.component';
import { BudgetCategoryComponent } from './budget-page/budget-category/budget-category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditRemainderComponent } from './budget-page/edit-remainder/edit-remainder.component';


@NgModule({
  declarations: [ BudgetPageComponent, SumDetailToggleComponent, WeekMonthToggleComponent, BudgetCategoryComponent, EditRemainderComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [BudgetPageComponent]
})
export class BudgetModule { }
