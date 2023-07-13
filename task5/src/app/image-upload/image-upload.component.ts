import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})

  export class ImageUploadComponent implements OnInit {
    selectedImage: string | ArrayBuffer | null = null;
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    onFileSelected(event: Event): void {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    }
}
