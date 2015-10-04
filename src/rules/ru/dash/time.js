Typograf.rule({
    name: 'ru/dash/time',
    handler: function(text) {
        var re = new RegExp(Typograf.data('ru/dashBefore') +
            '(\\d?\\d:[0-5]\\d)' +
            Typograf.data('common/dash') +
            '(\\d?\\d:[0-5]\\d)' +
            Typograf.data('ru/dashAfter'), 'g');

        return text.replace(re, '$1$2\u2014$3$4');
    }
});
