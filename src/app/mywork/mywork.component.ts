import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




DialogPubcrawl:any;
DialogSouthtours:any;
DialogLibre:any;
DialogEniac: any;
DialogPortfolio: any;

openDialogPub() {
    this.DialogPubcrawl = <any>document.getElementById("my-dialog-pubcrawl");
    this.DialogPubcrawl.showModal();
}

closeDialogPub() {
    this.DialogPubcrawl.close();
}


openDialogSouthTours() {
  this.DialogPubcrawl = <any>document.getElementById("my-dialog-southtours");
  this.DialogPubcrawl.showModal();
}

closeDialogSouthTours() {
  this.DialogPubcrawl.close();
}


openDialogEniac() {
  this.DialogEniac = <any>document.getElementById("my-dialog-eniac");
  this.DialogEniac.showModal();
}

closeDialogEniac() {
  this.DialogEniac.close();
}

openDialogPortfolio() {
  this.DialogPortfolio = <any>document.getElementById("my-dialog-portfolio");
  this.DialogPortfolio.showModal();
}

closeDialogPortfolio() {
  this.DialogPortfolio.close();
}

//   openDialog() {
//     let myDialogPubcrawl:any = <any>document.getElementById("my-dialog-pubcrawl");
//     myDialogPubcrawl.showModal();
// }

// closeDialog(){
//   let myDialogPubcrawl:any = <any>document.getElementById("my-dialog-pubcrawl");
 
// }


}
