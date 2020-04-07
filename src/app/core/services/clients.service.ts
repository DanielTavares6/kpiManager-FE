import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private apiUrl = 'http://localhost:8080/kpiManager/api/clients';

  constructor(
    private http: HttpClient
  ) { }

  public getAllClients(clients: Client[]) {
    return this.http.get<Client[]>(this.apiUrl);
  }
  
  
}


