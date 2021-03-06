import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient : HttpClient) { }

  /**
   * 
   * ORDERS
   */

  /*
  
    Get all orders
  
  */
  public getAllOrders() : Observable<Order[]> {

    return this.httpClient.get<Order[]>(`${environment.api_orders_url}/orders`);

  }

  /*

    Add Order

  */
  public addOrder(order : Order) : Observable<void> {

    return this.httpClient.post<void>(`${environment.api_orders_url}/add`, order);

  }

  /*

    Update Order

  */
  public updateOrder(order : Order) : Observable<void> {

    return this.httpClient.put<void>(`${environment.api_orders_url}/update/${order.id}`, order);

  }

  /*

    Delete Order

  */
  public deleteOrder(order : Order) : Observable<void> {

    return this.httpClient.delete<void>(`${environment.api_orders_url}/delete/${order.id}`);

  }


  /*

    BILLING

  */

  public getTotalRegularBilling() : Observable<any> {

    return this.httpClient.get<any>(`${environment.api_billing_url}/billing/regular`);

  }

  public getTotalDiscountedBilling() : Observable<any> {

    return this.httpClient.get<any>(`${environment.api_billing_url}/billing/discounted`);

  }


}
