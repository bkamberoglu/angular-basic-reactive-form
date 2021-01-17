import { Component, OnInit, VERSION } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  myForm: FormGroup;

  radioOptions: Array<any> = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" }
  ];

  selectOptions: Array<any> = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" }
  ];

  ngOnInit() {
    this.initForm();
  }

  hasError = (controlName: string, errorName: string) => {
    return this.myForm.get(controlName).hasError(errorName);
  };

  onSubmit() {
    if (this.myForm.valid) {
     alert("SUCCESS!! \n\n" + JSON.stringify(this.myForm.value));
    }
  }

  initForm() {
    this.myForm = new FormGroup({
      input: new FormControl("", [Validators.required]),
      textArea: new FormControl("", [Validators.required]),
      checkbox: new FormControl(""),
      select: new FormControl(""),
      radio: new FormControl("", [Validators.required])
    });
  }
}
