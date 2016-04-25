import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html'
})
class Socially {
  constructor() {
  }
}

bootstrap(Socially);
