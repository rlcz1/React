import { Box } from '../components/Box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
