import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dog} from '../../model/dog';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'http://localhost:8080/dog';
  dog: Dog = new Dog();

  constructor(private http: HttpClient) {
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

  load() {
    return this.http.get(this.url);
  }

  add(dog1: Dog) {
    const ob = JSON.stringify(dog1);
    return this.http.post(this.url, ob, {
      headers: {'Content-Type': 'application/json'}
    });
  }

  detail(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(dogUpdate: Dog, id: string) {
    const ob = JSON.stringify(dogUpdate);
    console.log(ob);
    return this.http.put(`${this.url}/${id}`, ob, {
      headers: {'Content-Type': 'application/json'}
    });
  }

}
