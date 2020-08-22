import {Component, OnInit} from '@angular/core';
import {Dog} from '../../model/dog';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HomeService} from '../servive/home.service';

@Component({
  selector: 'app-edithome',
  templateUrl: './edithome.component.html',
  styleUrls: ['./edithome.component.css']
})
export class EdithomeComponent implements OnInit {

  dog: Dog = new Dog();
  DogId: string;
  detailDog: Dog = new Dog();

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private service: HomeService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.DogId = params.Id;
    });
    this.detail(this.DogId);
  }

  detail(id: string) {
    this.service.detail(id).subscribe((item: any) => {
      this.detailDog = item;
    });
  }

  update() {
    this.service.update(this.detailDog, this.DogId).subscribe((response) => console.log(response),
      (error) => console.log(error));
    this.router.navigate(['/home']);
  }
}
