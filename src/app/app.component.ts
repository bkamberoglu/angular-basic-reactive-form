import { Component, OnInit, VERSION } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OptionType } from "./model/option-radio";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  myForm: FormGroup;

  isChecked: boolean = false;


  selectedRadio: string;

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
    console.log(this.myForm);
    console.log("input: ", this.myForm.get("input").value);
    console.log("textArea: ", this.myForm.get("textArea").value);
    console.log("checkbox: ", this.myForm.get("checkbox").value);
    console.log("select: ", this.myForm.get("select").value);
    console.log("radio: ", this.myForm.get("radio").value);

    alert(this.myForm);
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
