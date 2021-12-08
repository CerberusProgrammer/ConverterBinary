import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  text: string = '';
  binary: string = '';

  constructor(private _snackBar: MatSnackBar,
    private clipboardApi: ClipboardService) {}

  convertTextToBinary(string: string) {
    if (string === '') {
      this.openSnackBarString();
      return;
    }

    this.binary = '';

    for (var i = 0; i < string.length; i++)
      this.binary += string[i].charCodeAt(0).toString(2) + " ";
  }

  convertBinaryToText(string: string) {
    if (string === '') {
      this.openSnackBarBinary();
      return;
    }

    for(var i = 0; i < string.length; i++)
      if (!(string[i] === '1'))
        if(!(string[i] === '0'))
          if(!(string[i] === ' ')) {
            this.openSnackBarBinary();  
            return;
          }

    var binString = '';

    string.split(' ').map(function(bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
      });
      
    this.text = binString;
  }

  openSnackBarBinary() {
    this._snackBar.openFromComponent(binaryErrorSnackBar, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000,
    });
  }

  openSnackBarString() {
    this._snackBar.openFromComponent(stringErrorSnackBar, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000,
    });
  }

  copyText() {
    this.clipboardApi.copyFromContent(this.text);
    this._snackBar.openFromComponent(copyAlertSnackBar, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000,
    });
  }

  copyBinary() {
    this.clipboardApi.copyFromContent(this.binary);
    this._snackBar.openFromComponent(copyAlertSnackBar, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000,
    });
  }

  cleanText() {
    this.text = '';
  }

  cleanBinary() {
    this.binary = '';
  }
}

@Component({
  selector: 'binaryErrorSnackBar',
  templateUrl: 'binaryErrorSnackBar.html',
  styles: [""],
})
export class binaryErrorSnackBar {}

@Component({
  selector: 'stringErrorSnackBar',
  templateUrl: 'stringErrorSnackBar.html',
  styles: [""],
})
export class stringErrorSnackBar {}

@Component({
  selector: 'copyAlertSnackBar',
  templateUrl: 'copyAlertSnackBar.html',
  styles: [""],
})
export class copyAlertSnackBar {}