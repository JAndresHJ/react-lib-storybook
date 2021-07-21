import Table from "./table";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    cellTextColor: { control: "color" },
    headerTextColor: { control: "color" },
    cellBorderColor: { control: "color" },
    headerBorderColor: { control: "color" },
    backgroundColor: { control: "color" },
    headerBackgroundColor: { control: "color" }
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    ["This", "is", "just", "a", "test"],
    ["This", "is", "also", "a", "test"],
    ["Just", "a", "little", "more", "data"],
    ["Row", "number", "four", "right", "here"],
  ],
  headers: ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5"],
};
