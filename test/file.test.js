import { assert, default as chai } from 'chai';
import fs from 'fs';
import Typograf from '../build/typograf';

const t = new Typograf({locale: 'ru', htmlEntity: {type: 'digit'}});
    
chai.config.showDiff = true;

describe('Test before-after files', function() {
    const dir = './test/fixtures';
    const dirBefore = `${dir}/before/`;
    const dirAfter = `${dir}/after/`;

    const files = fs.readdirSync(dirBefore);

    files.forEach(function(el) {
        if (el.search(/\.tmp$/) !== -1) {
            return;
        }
        const fileBefore = dirBefore + el;
        const fileAfter = dirAfter + el;
        if (fs.statSync(fileBefore).isFile()) {
            const before = fs.readFileSync(fileBefore).toString();
            const after = fs.readFileSync(fileAfter).toString();
            const res = t.execute(before);
            fs.writeFileSync(fileBefore + '.tmp', res);
            it(fileBefore + ' == ' + fileAfter, function() {
                assert.equal(res, after);
            });
        }
    });
});
