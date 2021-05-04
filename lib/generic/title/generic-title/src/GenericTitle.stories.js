import GenericTitle from './GenericTitle.vue'

export default {
    title: 'generic/title/GenericTitle',
    component: GenericTitle,
}

export const Primary = () => ({
    components: { GenericTitle },
    template: '<GenericTitle>Primary Test</GenericTitle>',
  });
  export const Secondary = () => ({
    components: { GenericTitle },
    template: '<GenericTitle>Secondary Test</GenericTitle>',
  });