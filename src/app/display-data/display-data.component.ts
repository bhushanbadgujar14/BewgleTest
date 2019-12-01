import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {


  data = {
    price: "₹ 1,799.00",
    latestReviewDate: "2018-10-21T00:00:00.000Z",
    domain: "amazon.in",
    imageUrl: "https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg",
    name: "Bluetooth Speakers",
    title: "JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)",
    category: "Bluetooth Speakers",
    productId: "ABCD1234",
    createdAt: "2018-08-31T09:36:08.448Z",
    reviewCount: 3013,
    topScores: [
      {
        topic: "Sound Quality",
        score: 4.6
      },
      {
        topic: "Bass",
        score: 4.2
      },
      {
        topic: "Design and Build",
        score: 4.2
      },
      {
        topic: "Battery Backup",
        score: 4.2
      }
    ]
  }
  selected:String;
    color = 'dark';
  mode = 'determinate';
  value = 5;
  bufferValue = 5;

  constructor() { }

  ngOnInit() {
  }

  showData(){
    document.getElementById('jumbo').style.height="25vh";
    document.getElementById('lead').hidden=true;
    document.getElementById('my-2').hidden=true;
    document.getElementById('tagLine').hidden=true;
    document.getElementById('tagBtn').hidden=true;
    document.getElementById('dataHidden').hidden=false;
    document.getElementById('productData').hidden=false;
    document.getElementById('review').hidden=true;
    console.log(this.selected)
  }

  reset(){
    document.getElementById('jumbo').style.height="53vh";
    document.getElementById('lead').hidden=false;
    document.getElementById('my-2').hidden=false;
    document.getElementById('tagLine').hidden=false;
    document.getElementById('tagBtn').hidden=false;
    document.getElementById('productData').hidden=true;
    document.getElementById('review').hidden=true;
    document.getElementById('dataHidden').hidden=true;
  }

  showReview(){
    document.getElementById('productData').hidden=false;
    document.getElementById('review').hidden=false;
    document.getElementById('btnRevHide').hidden=false;
    document.getElementById('btnRev').hidden=true;
  }

  hideReview(){
    document.getElementById('review').hidden=true;
    document.getElementById('btnRev').hidden=false;
    document.getElementById('btnRevHide').hidden=true;
  }

}
