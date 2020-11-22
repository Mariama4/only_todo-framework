import Component, { ComponentProps } from '../../app/js/component';

export default class Modal extends Component.Default {
    constructor(element: ComponentProps) {
        super(element);
        

    }

    showModal = () => {
        this.nRoot.classList.remove('modal');
        this.nRoot.classList.add('modal--active');   
    }

    closeModal = () => {
        this.nRoot.classList.remove('modal--active');
        this.nRoot.classList.add('modal'); 
    }

    destroy = () => {
        // Destroy functions
    }
}