import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  text: string = '';
  binary: string = '';

  convertTextToBinary(string: string) {
    this.binary = '';

    for (var i = 0; i < string.length; i++)
      this.binary += string[i].charCodeAt(0).toString(2) + " ";
  }

  convertBinaryToText(string: string) {
    var binString = '';

    string.split(' ').map(function(bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
      });
      
    this.text = binString;
  }
}
