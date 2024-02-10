import React,{useState} from 'react';
import './App.css';
import { Header } from './nested_components/Header';
import { Body } from './nested_components/Body';
import { Footer } from './nested_components/Footer';
import { MapComponent } from './map_react/map_react_study';
import { UseStateComponent } from './use_state/use_state';
import { Button } from './button_component/button_component';
import { MoneyComponent } from './money_component/Money'


// const topCars = [
//   {id: 1, manufacturer: 'BMW', model:'m5cs'},
//   {id: 2, manufacturer: 'Mercedes', model:'e63s'},
//   {id: 3, manufacturer: 'Audi', model:'rs6'}
// ]

export type FilterType = 'all' | 'dollar' | 'ruble'

function App() {
  // const Button1Foo = (subscriber: string, age:number) => {
  //   console.log(subscriber,age)
  // }
  // const Button2Foo = (subscriber: string) => {
  //   console.log(subscriber)
  // }
  // const StupidButton = () => {
  //   console.log('Im stupid button')
  // }
  const [money, setMoney] = useState([
    {id:1, banknote: 'dollar', value: 100, number: ' a1234567890' },
    {id:2, banknote: 'dollar', value: 50, number: ' z1234567890' },
    {id:3, banknote: 'ruble', value: 100, number: ' w1234567890' },
    {id:4, banknote: 'dollar', value: 100, number: ' e1234567890' },
    {id:5, banknote: 'dollar', value: 50, number: ' c1234567890' },
    {id:6, banknote: 'ruble', value: 100, number: ' r1234567890' },
    {id:7, banknote: 'dollar', value: 50, number: ' x1234567890' },
    {id:8, banknote: 'ruble', value: 50, number: ' v1234567890' },
  ])
  let[filter,setFilter] = useState<FilterType>('all')
  let currentMoney = money;

  if(filter === 'ruble'){
    currentMoney = money.filter((m) => m.banknote === 'ruble')
  }
  if(filter === 'dollar'){
    currentMoney = money.filter((m) => m.banknote === 'dollar')
  }

  function changeFilter(nameButton:FilterType){
    setFilter(nameButton)
  }

  return (
        <div className='App'>
          <MoneyComponent money={currentMoney} changeFilter={changeFilter}/>
        </div>
  );
}

export default App;
