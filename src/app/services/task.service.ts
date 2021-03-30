import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Endereço URL do json-server
  url = 'http://localhost:3000/tasks';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //Busca os dados do json-server
  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url)
  }

  //Busca os dados por ID do json-server
  getTaskById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(this.url + '/' + id)
  }

  //Adiciona dados ao json-server
  saveTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.url, JSON.stringify(task), this.httpOptions)
  }

  //Atualiza dados do json-server
  updateTask(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(this.url + '/' + task.id, JSON.stringify(task), this.httpOptions)
  }

  //Deleta dados do json-server
  deleteTask(task: Task) {
    return this.httpClient.delete<Task>(this.url + '/' + task.id, this.httpOptions)
  }
}
