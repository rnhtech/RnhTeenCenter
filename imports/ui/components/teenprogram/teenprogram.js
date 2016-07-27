import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as Navigation } from '../navigation/navigation';
import { name as Home } from '../home/home';

import './teenprogram.html';

class TeenProgram {}

const name = 'teenprogram';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Navigation,
  Home
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: TeenProgram
})
  .config(config)

function config($locationProvider, $urlRouterProvider){
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
}
