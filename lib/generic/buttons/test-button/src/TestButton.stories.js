import TestButton from './TestButton.vue'

export default {
    title: 'buttons/TestButton',
    component: TestButton,
}

export const Primary = () => ({
    components: { TestButton },
    template: '<TestButton>Start</TestButton>',
  });
  export const Secondary = () => ({
    components: { TestButton },
    template: '<TestButton>You do you</TestButton>',
  });