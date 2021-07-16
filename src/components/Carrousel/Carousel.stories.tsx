import Carousel from ".";

const Story = {
  title: "Components/Carousel",
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  slides: ["testing", "with", "storybook"],
};

export default Story;
