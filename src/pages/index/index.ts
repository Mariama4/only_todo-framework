import { getComponent } from '../../app/js/component';
import { index } from '../../app/js/views';
import Header from '../../components/header/header';
import Modal from '../../components/modal/modal';

const Index = {
    namespace: 'index',
    beforeEnter() {
        // beforeEnter body
    },
    afterEnter() {
        // afterEnter body
        const header = new Header(getComponent('header'));
        const modal = new Modal(getComponent('modal'));

        let btnShowModal = document.querySelector('.todo__button');
        btnShowModal.addEventListener( "click" , modal.showModal);

        let btnCloseModal = document.querySelector('.button--close');
        btnCloseModal.addEventListener( "click", modal.closeModal);

        let btnEditItem =  (<HTMLInputElement>document.querySelector('.header__button'));
        btnEditItem.addEventListener( "click", () => {
            let inputItem = [document.querySelectorAll<HTMLInputElement>('.todo__input')];
            let inputItemLabel = [document.querySelectorAll<HTMLInputElement>('.todo__label')];  
            // потом.....
            // let inputItemSpan = [document.querySelectorAll<HTMLInputElement>('.todo__span')];  
            if (btnEditItem.textContent == 'Править') {
            btnEditItem.textContent = 'Отменить';
            inputItem.forEach(element => {
                for(let i = 0; i != inputItem[0].length; i++) {
                    element[i].setAttribute('checked', 'true');
                    inputItemLabel[0][i].classList.add('todo__label--edit');
            }
            });} else {
                btnEditItem.textContent = 'Править';
                inputItem.forEach(element => {
                    for(let i = 0; i != inputItem[0].length; i++) {
                        element[i].removeAttribute('checked');
                        inputItemLabel[0][i].classList.remove('todo__label--edit');
                }
                })
            }
        })
    },
    beforeLeave() {
        // beforeLeave body
    },
    afterLeave() {
        // afterLeave body
    }
}

export default Index