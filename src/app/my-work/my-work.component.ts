import { Component, OnInit, } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']

})

export class MyWorkComponent implements OnInit {



  constructor() {

  }

  ngOnInit(): void {
    AOS.init();
  }


  mouseMoved(event: MouseEvent, numOfCart) {
    let cart = document.getElementById(`innerCard${numOfCart}`);
    let xAxis = (document.getElementById(`cartID${numOfCart}`).getBoundingClientRect().width / 2 - event.offsetX) / 25;
    let yAxis = (document.getElementById(`cartID${numOfCart}`).getBoundingClientRect().height / 2 - event.offsetY) / 25;
    cart.style.transition = 'none';
    cart.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    this.rotateCart(numOfCart);
    // console.log(event);
  }


  rotateCart(numOfCart) {
    document.getElementById(`cartID${numOfCart}`).style.perspective = '1000px';
    document.getElementById(`BigImgID${numOfCart}`).style.transform = 'translateZ(150px)';
    document.getElementById(`BigImgID${numOfCart}`).style.transition = 'all 0.255s ease';
    document.getElementById(`BigImgID${numOfCart}`).style.transform = 'scale(1.3)';
  }


  setFalse(numOfCart) {
    let cart = document.getElementById(`innerCard${numOfCart}`);
    cart.style.transition = 'all 0.5s ease';
    cart.style.transform = `rotateY(0deg) rotateX(0deg)`;
    document.getElementById(`BigImgID${numOfCart}`).style.transform = 'translateZ(0px)';
    document.getElementById(`BigImgID${numOfCart}`).style.transform = 'scale(1)';
  }



}
