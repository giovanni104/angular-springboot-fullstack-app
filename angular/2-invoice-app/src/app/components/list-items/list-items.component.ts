import { Component } from '@angular/core';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { RowItemComponent } from '../row-item/row-item.component';


@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [InvoiceViewComponent,ClientViewComponent,CompanyViewComponent,ListItemsComponent,RowItemComponent],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {

}
