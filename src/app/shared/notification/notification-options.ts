import { NotifierOptions } from 'angular-notifier';

const notificationOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 20
    },
    vertical: {
      position: 'bottom',
      distance: 20,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onMouseover: 'pauseAutoHide'
  }
};

export default notificationOptions;
