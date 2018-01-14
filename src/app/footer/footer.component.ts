import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  companyName = 'Your CompanyName';
  companyLogo = './img/logo.jpg';

  socialNetwork = [
    {link: 'https://twitter.com/AIFalcon95', fafa: 'fa fa-twitter'},
    {link: 'https://www.instagram.com/aitorfalcon_/', fafa: 'fa fa-instagram'},
    {link: '', fafa: 'fa fa-pinterest'},
    {link: '', fafa: 'fa fa-facebook'},
    {link: '', fafa: 'fa fa-google'},
    {link: '', fafa: 'fa fa-youtube'},
  ];

  menu = ['Contactanos', 'Sobre Nosotros'];

  getSocial(i) {

    return this.socialNetwork[i];
  }

  getSocialLogo() {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
