import { Card } from "./Card";

export default {
  title: "App/Homepage/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <Card {...args} />;

export const NotBookmarkedCard = Template.bind({});
NotBookmarkedCard.args = {
  card: {
    id: 10,
    question: "jhfdskfjkld",
    answer: "djfkdsjkfdk!",
    tags: [1, 2, 3],
    isBookmarked: false,
  },
  onClickBookmarkIcon: () => {},
};

export const BookmarkedCard = Template.bind({});
BookmarkedCard.args = {
  card: {
    id: 10,
    question: "jhfdskfjkld",
    answer: "djfkdsjkfdk!",
    tags: [1, 2, 3],
    isBookmarked: true,
  },
  onClickBookmarkIcon: () => {},
};
