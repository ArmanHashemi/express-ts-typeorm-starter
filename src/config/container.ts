import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators'
const container = new Container({
    autoBindInjectable: true,
    defaultScope: 'Singleton'
});

export const { lazyInject }  = getDecorators(container, false)

export { container};
