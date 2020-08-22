import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dog} from '../../model/dog';
import {HomeService} from '../servive/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dog: Dog = new Dog();
  listDog: Dog[];

  // private url = 'http://localhost:8080/dog';

  constructor(private http: HttpClient, private service: HomeService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.load().subscribe((item: any[]) => {
      this.listDog = item;
    });
  }

  add() {
    this.service.add(this.dog).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    );
    return window.location.reload();
  }

  deleteDog(id: string) {
    this.service.delete(id).subscribe((response) => console.log(response),
      (error) => console.log(error));
    alert('Delete Success');
    return window.location.reload();
  }

}
