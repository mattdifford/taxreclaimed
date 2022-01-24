
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    window.a = a;
    $.each(a, function () {
        var count = window.a.filter((obj) => obj.name === this.name).length;
        if (o[this.name]) {
            o[this.name] += ', ' + this.value || '';
            if (!o[this.value]) {
                o[this.value] = true;
            }
        } else {
            o[this.name] = this.value || '';
            if (count > 1 && !o[this.value]) {
                o[this.value] = true;
            }
        }
    });
    return o;
};