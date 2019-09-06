import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

tshirts: any;
showDetails=false;
buyButton=false;
tshirtdetails:any;

addtocart(t){
  this.tshirtdetails=t;
  this.showDetails=true;
  this.buyButton=true;
}
cancel(d){
  this.showDetails=false;
  this.buyButton=false;
}
update(d):void{
  console.log(d.tshirtId);
  this.showDetails=false;
  this.buyButton=false;
}

ngOnInit(){
  this.tshirts=this.getTshirts();
  console.log(this.tshirts);
}

  getTshirts() {
    return [
      {
        "tshirtId": 1,
        "price": 10.45,
        "name":"T-shirt1",
        "description":"Black T-shirt ",
        "fimage": "https://github.com/Naincy123/CompanyTshirt/blob/master/src/assets/images/black1_f.jpg?raw=true",
        "bimage": "https://github.com/Naincy123/CompanyTshirt/blob/master/src/assets/images/black1_B.jpg?raw=true",
        "instock": 30,
        "color": "black",
        "productCode":"WOMAN-0011",
        "releaseDate":"March 19,2019",
        "size":"Large",
        "imggsrc":""
      },
      {
        "tshirtId": 2,
        "price": 100.45,
        "name":"T-shirt2",
        "description":"Blue T-shirt ",
        "fimage": "https://github.com/Naincy123/CompanyTshirt/blob/master/src/assets/images/blue1_F.jpg?raw=true",
        "bimage": "https://github.com/Naincy123/CompanyTshirt/blob/master/src/assets/images/blue1_B.jpg?raw=true",
        "instock": 27,
        "color": "blue",
        "productCode":"WOMAN-0012",
        "releaseDate":"April 9,2019",
        "size":"Large",
        "imggsrc":""
      }, 
      {
        "tshirtId": 3,
        "price": 90.45,
        "name":"T-shirt3",
        "description":"Grey T-shirt ",
        "fimage": "https://github.com/Naincy123/CompanyTshirt/blob/master/src/assets/images/grey1_F.jpg?raw=true",
        "bimage": "https://github.com/Naincy123/CompanyTshirt/blob/master/src/assets/images/grey1_B.jpg?raw=true",
        "instock": 40,
        "color": "grey",
        "productCode":"WOMAN-0022",
        "releaseDate":"May 8,2019",
        "size":"Large",
        "imggsrc":""
      }, 
      {
        "tshirtId": 4,
        "price": 20.3,
        "name":"T-shirt4",
        "description":"White T-shirt ",
        "fimage": "https://github.com/Naincy123/CompanyTshirt/blob/master/src/assets/images/white1_F.jpg?raw=true",
        "bimage": "https://github.com/Naincy123/CompanyTshirt/blob/master/src/assets/images/white1_B.jpg?raw=true",
        "instock": 20,
        "color": "white",
        "productCode":"WOMAN-0051",
        "releaseDate":"April 15,2019",
        "size":"Large",
        "imggsrc":""
      } ,
      {
        "tshirtId": 5,
        "price": 210.45,
        "name":"T-shirt5",
        "description":"Yellow T-shirt ",
        "fimage": "https://github.com/Naincy123/CompanyTshirt/blob/master/src/assets/images/yellow1_F.jpg?raw=true",
        "bimage": "https://github.com/Naincy123/CompanyTshirt/blob/master/src/assets/images/yellow1_B.jpg?raw=true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
        "instock":26,
        "color": "yellow",
        "productCode":"WOMAN-0018",
        "releaseDate":"August 21,2019",
        "size":"Large",
        "imggsrc":""
      }
    
    ]

    
  }
}
