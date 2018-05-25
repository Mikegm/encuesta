angular.module("exampleApp", [])
  .controller("DynamicFormCtrl", function() {
    var ctrl = this;
    
    var forms = [
      "form1.tpl.html",
      "form2.tpl.html",
      "form3.tpl.html",
    ];
    
    ctrl.displayedForms = [];
    
    ctrl.addForm = function(formIndex) {
      ctrl.displayedForms.push(forms[formIndex]);
    }
  });
