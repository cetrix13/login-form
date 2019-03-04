new Vue({
    el:'#app',
    data: {
        pass: '',
        phone: '',
        remember: false,
    },
    methods: {
        submitForm: function(event) {
            $.ajax({
                url: event.target.action,
                method: 'GET', // Should be 'POST' here, but we don't have server and will have an error
                data: { phone: this.phone, pass: this.pass, remember: this.remember },
                success: function() {
                    // TODO: Add proper handler
                    alert('All good and data send');
                },
                error: function() {
                    // TODO: Add proper handler
                    alert('Error occuried');
                },
                complete: function() {
                    event.target.reset();
                }
            });
            // reset to initial state
            this.phone = '';
            this.pass = '';
            this.remember = false;
        }

    },
    computed: {
        isValidForm: function() {
            return this.isValidPhone && this.isValidPass;
        },
        isValidPhone: function() {
            if (this.phone.length > 0) {
                if (/^\d{1}\s\(\d{3}\)\s\d{2}-\d{2}-\d{2}$/.test(this.phone.trim())) {
                    return true;
                }
                return false;
            }
        },
        isValidPass: function() {
            return this.pass.length > 5;
        }
    },
    mounted: function() {
        var bluredImg = document.getElementsByClassName('blured-image')[0];
        var formHeight = document.getElementById('app').offsetHeight;
        var formWidth = document.getElementById('app').offsetWidth;
        bluredImg.setAttribute('style',
            'height:' + formHeight + 'px;' +
            'width:' + formWidth + 'px;');
    },
});
