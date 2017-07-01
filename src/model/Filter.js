// @flow

export const Filters = {
  all: "FILTER_ALL",
  incomplete: "FILTER_INCOMPLETE"
};

export type Filter = $Keys<typeof Filters>;
