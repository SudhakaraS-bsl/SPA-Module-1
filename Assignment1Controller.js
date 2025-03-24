function Assignment1Controller() {

    var ctrl = this;
    ctrl.name = "Module-1 Coding Assignment";
    ctrl.items = "";
    ctrl.successMessage = "Enjoy!";
    ctrl.tooMuchMessage = "Too much!";
    ctrl.validationMessage = "Please enter data first";
    ctrl.success = false;
    ctrl.tooMuch = false;
    ctrl.validation = false;
    ctrl.validateItems = function () {
        console.log('validateItems');

        ctrl.success = false;
        ctrl.tooMuch = false;
        ctrl.validation = false;
        console.log('ctrl.items', ctrl.items);

        if (ctrl.items != "") {
            console.log(ctrl.items);
            var array = ctrl.items.split(',');
            console.log(array.length);

            if (array.length <= 3) {
                ctrl.success = true;

            }
            else {
                ctrl.tooMuch = true;
            }
        }
        else {
            console.log('validation failed');

            ctrl.validation = true;
        }
    };
}