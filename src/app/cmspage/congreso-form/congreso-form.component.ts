import { Component, OnInit } from '@angular/core';
import { Congreso } from '../congreso';
import { CongresoService } from '../congreso.service';
import { Router,  } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-congreso-form',
  templateUrl: './congreso-form.component.html',
  styleUrls: ['./congreso-form.component.css']
})
export class CongresoFormComponent implements OnInit {

  model = new Congreso();
  submitted = false;
  hidden = true;
  error: any = {};
  urls = [];
  ServerUrl = environment.baseUrl;

  uploadError: string;

  congressForm: FormGroup;

  imageUrl: string = "/assets/img/upload-image.png"
  fileToUpload: File = null;

  hackedvalue: any;

  constructor(
    private router: Router,
    private congresoService: CongresoService,
    private http: HttpClient,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

  }


  onSelectedFile(event) {//crea unas temps

    if (event.target.files.length > 0) {


      const image = event.target.files[0];
      const formData = new FormData();
      formData.append('image', image);
      console.log(image.name);
      console.log(image);
  
      
    }

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.onload = (event:any) => {
                console.log(event.target.result);
                 this.urls.push(event.target.result); 
              }

              reader.readAsDataURL(event.target.files[i]);
        }
    }
    
  } 

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);


    //preview de imagen
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);



    
  }

  onSubmit () {
    
    this.submitted = true;
    return this.congresoService.congresoSendForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error,
      
    );
    
  }



}
