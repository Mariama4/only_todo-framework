import Component, { ComponentProps } from '../../app/js/component';

export default class Header extends Component.Default {
    constructor(element: ComponentProps) {
        super(element);
        // console.log('init header');
    }

    destroy = () => {
        // console.log('destroy header');
    }
}