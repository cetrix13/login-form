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
                method: 'GET',
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
});
