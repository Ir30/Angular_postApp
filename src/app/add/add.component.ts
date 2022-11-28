import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  userId=""
  id=""
  title=""
  body=""

  readValues = ()=>{
    let data={
      "userId":this.userId,
      "id":this.id,
      "title":this.title,
      "body":this.body
    }

    console.log(data)
  }
}
