import 'module-alias/register';
import { addAliases } from 'module-alias';

addAliases({
    '@application': `${__dirname}/application`,
    '@domain': `${__dirname}/domain`,
    '@infrastructure': `${__dirname}/infrastructure`,
    '@presentation': `${__dirname}/presentation`,
    '@config': `${__dirname}/config`,
});
